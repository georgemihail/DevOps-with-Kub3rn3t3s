kubectl apply -f pingpong-backend-postgres/manifest/secret.yaml
kubectl apply -f pingpong-backend-postgres/manifest/configmaps.yaml
# kubectl apply -f postgres-db/persistentvolume.yaml
kubectl apply -f postgres-db/persistentvolumeclaim.yaml
# kubectl apply -f postgres-db/statefulset.yaml
kubectl apply -f pingpong-backend-postgres/manifest/deployment.yaml
kubectl apply -f pingpong-backend-postgres/manifest/service.yaml
kubectl apply -f ping-pong/manifest/configmaps.yaml
kubectl apply -f ping-pong/manifest/service.yaml
kubectl apply -f main-app/manifest/configmaps.yaml
kubectl apply -f main-app/manifest/deployment.yaml
kubectl apply -f main-app/manifest/services.yaml
kubectl apply -f main-app/manifest/ingress.yaml