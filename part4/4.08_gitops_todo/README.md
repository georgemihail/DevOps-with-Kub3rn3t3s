## Resources created

![output](sync-and-get-all.png)

## Browser result

![output](output-browser.png)

## Sync result and pods

![output](sync-and-get-pods.png)

***
## Environment 
### Repository Configuration
`source.yaml`
### Kustomization Configuration
`gitops-app.yaml`

`for-gitops/manifests/kustomize.yaml`

***

## Commands

`$ flux bootstrap github     --owner=georgemihail     --repository=gitops-todo-cluster     --personal --private=false`