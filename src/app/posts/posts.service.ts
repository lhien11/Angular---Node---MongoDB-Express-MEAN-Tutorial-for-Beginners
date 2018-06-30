import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostsService {
    private posts: Post[] = [];
    private postsUpdate = new Subject<Post[]>();

    getPosts() {
        // copy array 
        return [...this.posts]; 
    }

    getPostUpdateListener(){
        return this.postsUpdate.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post = { title: title, content: content};
        this.posts.push(post);
        this.postsUpdate.next([...this.posts]);
    }


}