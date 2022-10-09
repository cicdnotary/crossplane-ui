kind create cluster

kubectl create deployment hello-node --image=registry.k8s.io/echoserver:1.4

#kubectl cluster-info --context kind-kind