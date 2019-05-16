# Tesla Client

## Prerequites
YOU  
NEED  
DOCKER!

## Quick start
To start:
0. Create `.env` file. Fill it with variables from `.env.example`. Populate `.env` with correct values where needed.
1. Build docker image:
```sh
docker build -t tesla-client
```
2. Start docker container:
```sh
docker run -d -p 80:8080 --name tesla-client tesla-client
```

To read logs (logs will be displayed in real time):
1.  
```sh
docker logs -f -t --since 1s tesla-client
```

To stop:
1.  
```sh
docker kill tesla-client && docker rm tesla-client
```
