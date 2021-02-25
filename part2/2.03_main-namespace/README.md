## Commands

`$ kubectl create namespace main-namespace`

`$ kubectl config set-context --current --namespace=main-namespace`

`$ kubectl apply -f manifests/deployment.yml`

`$ kubectl apply -f manifests/service1.yml`

`$ kubectl apply -f manifests/service2.yml`

`$ kubectl apply -f manifests/ingress.yml`

## Main app (shot from Lens)

![output](output-2.01-1.png)

## Ping-pong microservice (shot from Lens)

![output](output-2.01-2.png)

## Result in the Browser

![output](output-2.01-3.png)
