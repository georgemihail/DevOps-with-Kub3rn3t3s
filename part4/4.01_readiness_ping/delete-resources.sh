kubectl delete -f pingpong-backend-postgres/manifest/secret.yaml
kubectl delete -f pingpong-backend-postgres/manifest/configmaps.yaml
# kubectl delete -f postgres-db/persistentvolume.yaml
kubectl delete -f postgres-db/persistentvolumeclaim.yaml
# kubectl delete -f postgres-db/statefulset.yaml
kubectl delete -f pingpong-backend-postgres/manifest/deployment.yaml
kubectl delete -f pingpong-backend-postgres/manifest/service.yaml
kubectl delete -f ping-pong/manifest/configmaps.yaml
kubectl delete -f ping-pong/manifest/service.yaml
kubectl delete -f main-app/manifest/configmaps.yaml
kubectl delete -f main-app/manifest/deployment.yaml
kubectl delete -f main-app/manifest/services.yaml
kubectl delete -f main-app/manifest/ingress.yaml