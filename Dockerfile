FROM node:lts
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV MONGO_URL=host.docker.internal:27017/expense-bkup
ENV LOG_PATH=/logs
ENV PORT=8000
CMD npm run prod

###--------------------------------------------------------------------------------------------------###

# docker build . -t expense-image
#
# docker run --rm --name expense --network="host" -p 8000:8000 -p 27017:27017 -v C:/Java/GitHub/logs:/logs expense-image
#
# docker run -t -i --rm --name expense -p 8000:8000 -p 27017:27017 -v C:/Java/GitHub/logs:/logs expense-image
#
# docker container ls
# docker container rm -f expense

###--------------------------------------------------------------------------------------------------###
