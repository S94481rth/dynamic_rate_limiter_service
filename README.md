All you have to do is 
1. Start docker daemon (just open the docker desktop application)
2. go to cmd
3. run the command
   `docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest`
4. go to your desired file location and
   `git clone https://github.com/S94481rth/dynamic_rate_limiter_service.git`
5. now run
    `npm install`
    to install all the dependencies from package.json
6. and just finally run
     `node server.js` to start the server
7. open localhost:8001 to visualize the redis db
8. open locahost:4000 and hit end points like
       localhost:4000/rate-limit
       localhost:4000/rate-limit
