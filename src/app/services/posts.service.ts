import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment.model';
import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  posts: Post[] = new Array<Post>();

  constructor() { }


  getAll(){
    return this.posts;
  }

  get(id:number) {
    return this.posts[id];
  }

  getId(post: Post) {
    return this.posts.indexOf(post);
  }

  add(post: Post) {
    post.comments = [];
    let newLength = this.posts.push(post);
    let index = newLength - 1;
    return index;
  }



  delete(id:number) {
    this.posts.splice(id, 1);
  }


  addComment(postId: number, name:string, body:string) {
    let comment:Comment = new Comment();
    comment.name = name;
    comment.body = body;
    this.posts[postId].comments.push(comment);
  }



}
