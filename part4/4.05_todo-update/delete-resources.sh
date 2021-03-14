kubectl delete -f manifests/secret.yaml
kubectl delete -f manifests/statefulset.yaml # postgres-db
kubectl delete -f manifests/configmap.yaml
kubectl delete -f manifests/deployment.yaml
kubectl delete -f manifests/service.yaml
kubectl delete -f manifests/ingress.yaml
kubectl delete -f manifests/analysistemplate.yaml
kubectl delete -f manifests/rollout-update.yaml