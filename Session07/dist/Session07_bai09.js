"use strict";
class Comments {
    id;
    userID;
    content;
    replies = [];
    constructor(id, userID, content) {
        this.id = id;
        this.userID = userID;
        this.content = content;
    }
}
class Post {
    id;
    likes = [];
    userID;
    content;
    comment = [];
    constructor(id, userID, content) {
        this.id = id;
        this.userID = userID;
        this.content = content;
    }
}
class User {
    id;
    posts = [];
    followers = [];
    constructor(id) {
        this.id = id;
    }
    createPost(Postid, content) {
        const post = new Post(Postid, this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(post, Commentid, content, parentComment) {
        const comment = new Comments(Commentid, this.id, content);
    }
}
