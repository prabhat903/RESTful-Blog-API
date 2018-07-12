let store = require("../store/store");
module.exports = {
	getComments(req, res) {
		let blogPost = req.blogPost;
		blogPost.comments.length ? res.send(blogPost.comments):res.send({
			sucess : true,
			message: "No Comments found",
			postId : blogPost.id
		});
	}, 
	addComment(req, res) {
		let blogPost = req.blogPost,
		newId = "Comment_"+ new Date().getTime()+parseInt((Math.random()*1000));
		blogPost.comments.push({
			id : newId,
			text : req.body.text || "",
		});
		res.send({
			sucess:true,
			message: "Comment added Sucessfuly."
		});
	},
	updateComment(req, res) {
		let blogPost = req.blogPost,
		commentId = req.params.commentId,
		iscommentFound = false; 
		blogPost.comments.forEach((ele,ind)=>{
			if(ele.id == commentId){
				iscommentFound = true;
				ele.text = req.body.text || ele.text
			}
		});
		res.send({
			sucess: iscommentFound,
			message: iscommentFound ? "Comment Updated Sucessfuly." : "Comment not found with commentId"
		})
	},
	removeComment(req, res) {
		let blogPost = req.blogPost,
		commentId = req.params.commentId,
		iscommentFound = false; 
		blogPost.comments.forEach((ele,ind)=>{
			if(ele.id == commentId){
				iscommentFound = ind;				
			}
		});
		iscommentFound ? blogPost.comments.splice(iscommentFound,1):"";
		res.send({
			sucess: iscommentFound,
			message: iscommentFound ? "Comment removed Sucessfuly." : "Comment not found with commentId"
		})
	},
	postsRecordCheck(req,res,next){
		let postId = req.params.postId;
		let isPostFound = false;
		store.posts.forEach((ele,ind)=>{
			if(ele.id == postId){
				isPostFound = ele;
			}
		});
		if(isPostFound){
			req.blogPost = isPostFound;
			next();
		}else{
			res.send({
				sucess: isPostFound,
				message: "Post record not found with PostId"
			})
		}
	}
}