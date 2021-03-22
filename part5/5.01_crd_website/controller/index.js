var wget = require('node-wget');
const fs = require('fs')
const express = require('express')
const app = express()

const k8s = require('@kubernetes/client-node')
const request = require('request')
const JSONStream = require('json-stream')

let web_url

// Use Kubernetes client to interact with Kubernetes

const kc = new k8s.KubeConfig();

process.env.NODE_ENV === 'development' ? kc.loadFromDefault() : kc.loadFromCluster()

const opts = {}
kc.applyToRequest(opts)

const client = kc.makeApiClient(k8s.CoreV1Api);

// For ingress
const k8sApi = kc.makeApiClient(k8s.NetworkingV1beta1Api) // before 1.14 use extensions/v1beta1


/* Download a website */
const downloadWebsite = async (url) => {
    await wget({
        url:  `${url}`,
        dest: './web/index.html',
        timeout: 2000
    },
    function (error, response, body) {
        if (error) {
            console.log('--- error:');
            console.log(error);
        } else {
            console.log('--- body:');
            console.log(body);
        }
    }
    );
    return 
}


/* if the website do not exist, download it */
const existsOrDownload = async (url, res) => {
    try {
        const web = fs.existsSync(`./web/index.html`)
        if (!web)
            throw new Error('website is not local')
        return true
    } catch (e) {
        await downloadWebsite(url)
        return false
    }
}


app.get('/', async (_req, res) => {
    if (!web_url)
        return res.send('Web url does not exists yet.')
    const result = await existsOrDownload(web_url, res)
    if (!result) {
        return res.send('Reload (F5) for the local webpage .....')
    }
    res.sendFile('/web/index.html', { root : __dirname })
})


/* Streaming
field from API */
const maintainStatus = async () => {
    (await client.listPodForAllNamespaces()).body // A bug in the client(?) was fixed by sending a request and not caring about response

    /**
     * Watch website_url
     */

    const weburl_stream = new JSONStream()

    weburl_stream.on('data', async ({ type, object }) => {
        const fields = object.spec.website_url

        if (type === 'ADDED') {
            // replace index.html file
            web_url = fields
            downloadWebsite(web_url)
        }
        // delete index.html file
        if (type === 'DELETED'){
            // remove previos day if exists
            if (fs.existsSync(`./web/index.html`)) {
                fs.unlinkSync('./web/index.html')
                web_url = null
                console.log('unlinked')
            }
        }
    })

    request.get(`${kc.getCurrentCluster().server}/apis/static.dwk/v1/dummysites?watch=true`, opts).pipe(weburl_stream)
}

maintainStatus()

// Create a service
client.createNamespacedService('default', {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
        annotations: {},
        name: 'dummysite-svc',
        namespace: 'default'
    },
    spec: {
        ports: [{
            name: 'http',
            nodePort: 30080,
            port: 1234,
            protocol: 'TCP',
            targetPort: 3004
        }],
        selector: {
            app: 'dummysite-controller'
        },
        type: 'NodePort'
    }
}).catch(e => console.log(e))

const PORT = 3004

app.listen(PORT, () => {
    console.log(`server is listen at ${PORT}`)
})
