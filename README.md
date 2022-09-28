# react_express_mongodb_JWT
A project demonstrates strategy of jwt authentication flow.

# Installation
- Login to MongoDb, create a cluster and 2 collections in it. Here I created 2 collections name: "employees" {Document has firstname and lastname as string) and "users"(Document has username as string, roles as  object, password as string, refreshtoken as string)
- Go to /backend and create .env file contains: 
+ PORT = Server Port number (example: 8080)
+ DATABASE_URI = MongoDb Cluster URL 
+ ACCESS_TOKEN_SECRET = YOUR_ACCESS_TOKEN_SECRET 
+ REFRESH_TOKEN_SECRET = YOUR_REFRESH_TOKEN_SECRET
+ SALT = Salt number (example: 10)

# Usage
- go to /backend and run: npm run dev
- go to /frontend and run: npm start


![image](https://user-images.githubusercontent.com/71656736/192789547-85de6747-8bd5-4f9e-839b-effa893343c8.png)
