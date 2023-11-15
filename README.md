# docker

npm init -y
npm i express
node index.js
curl http://localhost:3000

container: [
FROM, node:16
COPY, . .
RUN, npm cli
CMD ['node', 'index.js']
('ENTRYPOINT')
]

create  -Dockerfile
        -dockerignore

npm ci = package-lock.json // get dependencies from this file!!
npm i = package.json // THE NEWEST DEPENDENCIES !!

docker build -t result .  // result = container's name
docker run result
docker run -d result // detouched = id container & continue to work
docker logs a9efda3434d6a45329aa69fe494873c93b725ad36770d95035e53bfa3f1b2147 // check - is container running?
docker ps // show all running containers
docker stop romantic_bouman // stop container =romantic_bouman
docker ps -a // show all containers
docker exec -it romantic_bouman /bin/sh  // set command into container & pass inside to enter commands
# ls
ctrl + D = exit 
docker system prune // cleaned & deleted all containers

