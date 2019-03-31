import { RouterModule, Router } from '@angular/router';
import { PostsService } from './../posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  postsForm: FormGroup;

  constructor(private RouterModule: RouterModule, private _router: Router, private _formBuilder: FormBuilder, private PostsService: PostsService) { }

  ngOnInit() {
    this.postsForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    var postobj = {
      userid: '',
      title: form.value.title,
      description: form.value.description
    };
    this.PostsService.createPost(postobj)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(["/posts"])
        },
        err => {
          console.log("Error occured");
        }
      );
    // this.RouterModule.navigate(['/posts']);

  };
};
