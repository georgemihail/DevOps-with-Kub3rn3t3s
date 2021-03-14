
## Query of CPU usage rate (per minute) 

`scalar(sum(rate(container_cpu_usage_seconds_total{namespace="default"}[1m])))`

## Query monitoring before updating a todo

![output](before-updating-todo.png)

## Query analysis after updating a todo

![output](after-updating-todo.png)

## Todo app's rollouts

![output](get-rollout.png)

## Rollout details

![output](get-rollout-details.png)

## Todo app's analysis template

![output](get-analysis-template.png)

## Todo app's analysis run:

![output](get-ar.png)


## Browser result

![output](browser-result.png)

## Files:
* Analysis Template file: `manifests/analysistemplate.yaml`
* Analysis Template file: `manifests/analysistemplate.yaml`
* Rollout file: `manifests/rollout-update.yaml`

`sh create-resources.sh`