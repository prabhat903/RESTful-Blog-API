const posts = require('./posts.js');
const comments = require('./comments.js');

let router = function(app){
	// Posts End Point routes
	app.get('/posts',posts.getPosts);
	app.post('/posts',posts.addPost);
	app.put('/posts/:postId/',posts.updatePost);
	app.delete('/posts/:postId/',posts.removePost);

	// comments End Point routes
	app.get('/posts/:postId/comments',comments.postsRecordCheck,comments.getComments);
	app.post('/posts/:postId/comments',comments.postsRecordCheck,comments.addComment);
	app.put('/posts/:postId/comments/:commentId',comments.postsRecordCheck,comments.updateComment);
	app.delete('/posts/:postId/comments/:commentId',comments.postsRecordCheck,comments.removeComment);
}

module.exports = router;
