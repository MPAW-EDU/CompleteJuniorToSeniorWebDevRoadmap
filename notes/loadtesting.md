
1. Globally install a loadtesting package
    # npm i -g loadtest
2. run the following command when your load balancer is running
    # loadtest -t 5 -c 100 --rps 100 http://localhost:80