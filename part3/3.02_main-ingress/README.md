## Deployment to GKE script commands

`$ kubectl apply -f pingpong-backend-postgres/manifest/secret.yaml`

`$ kubectl apply -f pingpong-backend-postgres/manifest/configmaps.yaml`

`$ kubectl apply -f postgres-db/statefulset.yaml`
`$ kubectl apply -f pingpong-backend-postgres/manifest/deployment.yaml`

`$ kubectl apply -f pingpong-backend-postgres/manifest/service.yaml`

`$ kubectl apply -f ping-pong/manifest/configmaps.yaml`

`$ kubectl apply -f ping-pong/manifest/deployment.yaml`

`$ kubectl apply -f ping-pong/manifest/service.yaml`

`$ kubectl apply -f main-app/manifest/configmaps.yaml`

`$ kubectl apply -f main-app/manifest/deployment.yaml`

`$ kubectl apply -f main-app/manifest/services.yaml`


## Request the Ping/pong app to GKE ingress path: */pingping

![output](output-browser-pingpong.png)

## Request the Main app to GKE ingress path: */

![output](output-browser-main.png)

## Ingress:

![output](get-ingress.png)

## Services:

![output](get-services.png)

## Pods:

![output](get-pods.png)

## Workloads from Google Cloud platform - GKE:

![output](gke-workloads.png)

## Services and ingress from Google Cloud platform - GKE:

![output](gke-services-ingress.png)

## Create cluster and resources on GKE

`$ sh deploy-on-gcloud.sh`