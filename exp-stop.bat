@echo off
echo Stopping Expense Tracker - using 'docker-compose down'
cd %BASE_DOCKER%
docker-compose down
