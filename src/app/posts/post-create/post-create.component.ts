import { PostsService } from '../posts.service';
import { Component} from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredContent = "";
  enteredTitle = "";

  constructor(public postService: PostsService){}
  

  onAddPost(form: NgForm) {
      if(form.invalid){
          return;
      }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    this.postService.addPost(form.value.title, form.value.content);
  }
}
