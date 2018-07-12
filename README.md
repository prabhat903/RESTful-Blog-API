# RESTful-Blog-API
learning node express REST services

<h2>To run the application.</h2>
download the repository to ur local.
open the terminal or command line in the directory having server.js and perform 
<b>npm install</b> , to load all node modules.
once the node module are installed, perform
<b>node server.js</b>
<ul>
<li>I have crated a on server store to keep the posts and comments.
<li>I tried to create a middleware for the comments services which checks whether any Blog Post present or not.
</ul>
<h2>Tests :</h2> 
I performed test with the Postman.

<p>A Post Body Object(JSON) is as followes.</p>
<ul>
  <li>Method Type : POST.
  <li>service Url: localhost:8080/posts
</ul>

<code>{
  name: "any name",
  url : "any url to ur blog",
  text : "description about ur post"
}</code>


<p>this will create a post having a random Id for ur post and also include comments array.</p>
<p>
A Comments Body Object(JSON) is as follows.</p>
<ul>
  <li>Method Type : POST.
  <li>service Url: localhost:8080/posts/Post_1531393882781868/comments.
  <li>Post_1531393882781868 --- is the Id created for any Posts u will get it by performing get request on Blog Posts
</ul>

<code>
{
  text: "comment text"
}
</code>
 this will create a comment in the Posts object.
