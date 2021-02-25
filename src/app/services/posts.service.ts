import { Injectable } from '@angular/core';
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
    let newLength = this.posts.push(post);
    let index = newLength - 1;
    return index;
  }



  delete(id:number) {
    this.posts.splice(id, 1);
  }




}
