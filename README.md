# crossplane-ui

UI for monitoring a crossplane platform

### Install Crossplane
```
helm repo add crossplane-stable \
    https://charts.crossplane.io/stable

helm repo update

helm upgrade --install \
    crossplane crossplane-stable/crossplane \
    --namespace crossplane-system \
    --create-namespace \
    --wait
```

### Install Cloud Provider & Secrets
#### GCP
You will need to export a JSON service account to a file named 'gcp-creds.json'
```
kubectl --namespace crossplane-system \
    create secret generic gcp-creds \
    --from-file creds=./gcp-creds.json
```

Apply the GCP provider
```
kubectl crossplane install provider \
    crossplane/provider-gcp:v0.21.0
```

Apply the provider config to reference the secret
```
kubectl apply -f crossplane-config/provider-gcp.yaml

Install GCP GKE Composition
```
kubectl apply -f crossplane-config/k8s/composition-gke.yaml
```