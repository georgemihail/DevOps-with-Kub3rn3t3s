
## Query of CPU usage rate (per minute) 

`scalar(sum(rate(container_cpu_usage_seconds_total{namespace="default"}[1m])))`

## Query monitoring before making a new todo

![output](before-creating-todo.png)

## Query analysis after making a new todo

![output](after-creating-2-todos.png)

## Conclusion: 0.15 is a good value as maximum CPU usage refference

## Todo app's rollouts

![output](get-rollout.png)

## Todo app's analysis template

![output](get-analysis-template.png)

## Browser result

![output](browser-result.png)

## Files:
* Analysis Template file: `manifests/analysistemplate.yaml`
* Analysis Template file: `manifests/analysistemplate.yaml`
* Rollout file: `manifests/rollout.yaml`

`sh create-resources.sh`