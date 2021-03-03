kubectl apply -f manifests/secret.yaml
kubectl apply -f manifests/statefulset.yaml # postgres-db
kubectl apply -f manifests/configmap.yaml
kubectl apply -f manifests/persistentvolumeclaim.yaml
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml