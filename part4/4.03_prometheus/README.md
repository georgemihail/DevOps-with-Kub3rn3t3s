
## Prometheus platform result query:

![output](prometheus-query.png)

## Prometheus pods

![output](prometheus-pods.png)

Query: `scalar(count(kube_pod_info{namespace="prometheus", created_by_kind="StatefulSet"}))`