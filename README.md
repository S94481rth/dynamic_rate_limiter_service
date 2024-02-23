All you have to do is 
1. Start docker daemon (just open the docker desktop application)
2. go to cmd
3. run the command
   docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
4. go to your desired file location and
   git clone 
