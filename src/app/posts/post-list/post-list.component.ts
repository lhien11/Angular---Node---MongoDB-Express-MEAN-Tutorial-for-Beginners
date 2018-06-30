import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Post } from './../post.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[]= [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { 
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe(( posts: Post[] )=> {
      this.posts = posts; 
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
