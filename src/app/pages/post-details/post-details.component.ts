import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post.model';
import { Comment } from 'src/app/shared/comment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  post: Post;
  postId: number;
  comment: Comment;

  constructor(private postService: PostsService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.post = new Post();
    this.comment = new Comment();

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        if(this.postService.get(params.id)){
          this.post = this.postService.get(params.id);
        this.postId = params.id;
        } else {
          this.router.navigateByUrl("/posts");
        }
      }
    })

  }

  onSubmit(form:NgForm){
    this.postService.addComment(this.postId, form.value.name, form.value.body);
  }



}
