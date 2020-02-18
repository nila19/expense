FROM node:lts
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
# the following env variables need to be set if running directly as docker, instead of docker-compose
# ENV MONGO_URL=host.docker.internal:27017/expense
# ENV LOG_PATH=/logs
# ENV PORT=8000
CMD npm run prod

###----------------------------------------- APP ----------------------------------------------------###

# docker build . -t expense-image
#
# docker run --rm --name expense --network="host" -p 8000:8000 -p 27017:27017 -v C:/Java/logs:/logs expense-image
#
# docker run -t -i --rm --name expense -p 8000:8000 -p 27017:27017 -v C:/Java/logs:/logs expense-image
#
# docker container ls
# docker container rm -f expense

###--------------------------------------------------------------------------------------------------###
###------------------------------------------- DB ---------------------------------------------------###

# docker exec -it mongodb bash
# >> mongo
# >> use expense
# >> db.createUser({user:"bala", pwd:"m0ng0pwd", roles:[{role:"readWrite", db: "expense"}]});

# run as background task
# docker run -d --name mongodb -v /mnt/c/Java/mongodb/data:/data/db -p 27017:27017 mongo

# run in interactive mode; remove the container upon exit
# docker run -i -t --rm --name mongodb -v /mnt/c/Java/mongodb/data:/data/db -p 27017:27017 mongo
# C:\Java\mongodb> mongorestore

###--------------------------------------------------------------------------------------------------###
