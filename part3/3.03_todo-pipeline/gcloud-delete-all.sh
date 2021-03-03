kubectl delete -f manifests/secret.yaml
kubectl delete -f manifests/statefulset.yaml # postgres-db
kubectl delete -f manifests/configmap.yaml
kubectl delete -f manifests/deployment.yaml
kubectl delete -f manifests/persistentvolumeclaim.yaml
kubectl delete -f manifests/service.yaml