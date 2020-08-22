This project is having:-
1.User authentication through JWT
2.JSon Patching
3.Image Thumbnail

For running project type: npm start in cmd
This will start up a server and will be locally host at 3000 port number.

1)For registering user :- For hitting up API in postman , click on post method and in Url,type: http://localhost:3000/register/registeruser.
In its body choose raw and select from drop down JSON ex:-
{
"firstname":"Ruchika",
"lastname":"Bajaj",
"emailid":"dhawanruchika88@gmail.com",
"password":"12345678"
}
This will store user details in mongodb

2)for user login:-For hitting up API in postman , click on post method and in Url,type: http://localhost:3000/login/loginuser
In its body choose raw and select from drop down JSON ex:-
{
"emailid":"dhawanruchika88@gmail.com",
"password":"12345678"
}
This will check whether the user is valid or not,if valid ,then access token will be generated 

3)for jsonPatching and imagePatching Individual Programs(in JsonPatching and imageThumbnails folder) as well as microservices are created in route