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
