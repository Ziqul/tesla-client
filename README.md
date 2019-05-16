# Tesla Client

## Prerequites
YOU  
NEED  
DOCKER!

## Quick start
To start:
1. Create `.env` file. Fill it with variables from `.env.example`. Populate `.env` with correct values where needed.
2. Build and start docker container:
```sh
docker run --rm -d -p 80:8080 --name tesla-client $(docker build -q .)
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
