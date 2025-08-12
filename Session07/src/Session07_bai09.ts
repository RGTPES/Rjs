class Comments {
    id: string;
    userID: string;
    content: string;
    replies: Comments[] = [];

    constructor(id: string, userID: string, content: string) {
        this.id = id;
        this.userID = userID;
        this.content = content;
    }
    addReply(reply: Comments) {
        this.replies.push(reply);
    }
}

class Post {
    id: string;
    likes: string[] = [];
    userID: string;
    content: string;
    comments: Comments[] = [];

    constructor(id: string, userID: string, content: string) {
        this.id = id;
        this.userID = userID;
        this.content = content;
    }

    addLike(userID: string) {
        if (!this.likes.includes(userID)) {
            this.likes.push(userID);
        }
    }

    addComment(comment: Comments) {
        this.comments.push(comment);
    }
}

class User {
    id: string;
    posts: Post[] = [];
    followers: User[] = [];

    constructor(id: string) {
        this.id = id;
    }

    createPost(postId: string, content: string): Post {
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
        return post;
    }

    comment(post: Post, commentId: string, content: string, parentComment?: Comments) {
        const comment = new Comments(commentId, this.id, content);

        if (parentComment) {
            parentComment.addReply(comment);
        } else {
            post.addComment(comment);
        }
    }

    follow(user: User) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(post: Post) {
        post.addLike(this.id);
    }
}
