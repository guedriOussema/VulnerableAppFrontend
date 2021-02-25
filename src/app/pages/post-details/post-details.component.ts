import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  post: Post;
  postId: number;

  constructor(private postService: PostsService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.post = new Post();
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.post = this.postService.get(params.id);
        this.postId = params.id;
      }
    })

  }

}
