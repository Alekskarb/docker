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
