let store = require("../store/store");
module.exports = {
	getPosts(req, res) {
		store.posts.length?res.send(store.posts):res.send({
			sucess : true,
			message: "No Post found"
		});
	},
	addPost(req, res) {
		let newId = "Post_"+ new Date().getTime()+parseInt((Math.random()*1000));
		store.posts.push({
			id : newId,
			name : req.body.name || "",
			url : req.body.url || "",
			text : req.body.text || "",
			comments : []
		});
		res.send({
			sucess:true,
			message: "Post Created Sucessfuly."
		});
	},
	updatePost(req, res) {
		let postId = req.params.postId;
		let isPostFound = false; 
		store.posts.forEach((ele,ind)=>{
			if(ele.id == postId){
				isPostFound = true;
				ele.name = req.body.name || ele.name,
				ele.url = req.body.url || ele.url,
				ele.text = req.body.text || ele.text
			}
		});
		res.send({
			sucess: isPostFound,
			message: isPostFound ? "Post Updated Sucessfuly." : "Post record not found with PostId"
		})
	},
	removePost(req, res) {
		let postId = req.params.postId;
		let isPostFound = false; 
		store.posts.forEach((ele,ind)=>{
			if(ele.id == postId){
				isPostFound = ind;				
			}
		});
		isPostFound ? store.posts.splice(isPostFound,1):"";
		res.send({
			sucess: isPostFound,
			message: isPostFound ? "Post removed Sucessfuly." : "Post record not found with PostId"
		})
	}
}