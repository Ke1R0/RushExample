# Prerequisites
## Rush
```sh
npm install -g @microsoft/rush
```

## Verdaccio
```sh
npm i -g verdaccio
```

# Usage
## Install packages
```sh
rush update
```

## Start project
```sh
cd ./projects/delivery && rushx start
```
```sh
cd ./projects/orders && rushx start
```
```sh
cd ./projects/orders && rushx start
```

## Deploy
```sh
rush deploy --overwrite --project @infinity/ProjectName
```
or
```sh
rush deploy --overwrite --scenario full
```

## Publish
### To .tgz file
Files will be published to RushProj/common/temp/projects/*.tgz
```sh
rush publish --pack --include-all --publish
```
### To npm registry
```sh
rush publish --apply --target-branch master --publish --registry http://localhost:4873 --npm-auth-token Kmy9sBG+nf9rgPzrBdO2zw==
```
