@echo off
echo Starting Expense Tracker - using 'docker-compose up -d --build'
echo Stop the containers with command -> 'docker-compose down'

cd %BASE_DOCKER%
docker-compose up -d --build
