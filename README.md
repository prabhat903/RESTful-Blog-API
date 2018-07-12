# RESTful-Blog-API
learning node express REST services

# To run the application.
download the repository to ur local.
open the terminal or command line in the directory having server.js and perform 
<b>npm install</b>
, to load all node modules.
once the node module are installed, perform
<b>node server.js</b>

I have crated a on server store to keep the posts and comments.
I tried to create a middleware for the comments services which checks whether any Blog Post present or not.

# Tests : 
I performed test with the Postman.

A Post Body Object(JSON) is as followes.
Method Type : POST.
service Url: localhost:8080/posts


{
  name: "any name",
  url : "any url to ur blog",
  text : "description about ur post"
}


this will create a post having a random Id for ur post and also include comments array.

A Comments Body Object(JSON) is as follows.

Method Type : POST.
service Url: localhost:8080/posts/Post_1531393882781868/comments

Post_1531393882781868 --- is the Id created for any Posts u will get it by performing get request on Blog Posts

{
  text: "comment text"
}

 this will create a comment in the Post object.
