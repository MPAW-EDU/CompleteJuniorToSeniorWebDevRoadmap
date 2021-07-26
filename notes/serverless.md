 
 ### Serverless /w AWS Lambda

 1. Installation:
    - npm i -g serverless

 2. Create working template files
    - sls create -t aws-nodejs

 3. Connect your AWS account to your local serverless framework
    - AWS: create user, setup programmatic access, create a permission group
    - Enter the sls config into your terminal:
        - sls config credentials --provider aws --key [yourKey] --secret [yourSecret]  

 4. Deploying your function
    - Uncomment and change if needed the stage which is located in serverless.yml
    - Upgrade the name of your service so that it matches your aws service name, serverless.yml
    - Update your callback if needed
    - run sls deploy in terminal

 5. Testing your funciton
    - run sls invoke local --function [functionName] in terminal
    - if you don't run this local it could cost you money while testing your function
