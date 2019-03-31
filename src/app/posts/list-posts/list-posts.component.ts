import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: any = [];
  comments: any = [];

  addComment: any = '';
  post = false;
  p: any;

  onSelect(post) {
    this.p = post;
    // console.log(post);
    this.post = !this.post;
    this._router.navigate(['/post', post._id])
  }

  constructor(private _postsService: PostsService, private _router: Router) { }


  ngOnInit() {

    this._postsService.getAllPosts().subscribe(data => {
      // console.log(typeof (data));
      this.posts = data;
    })

    this._postsService.getAllComments().subscribe(data => {
      // console.log(data);
      this.comments = data;
    })
  }

  //


  comment(idc) {
    var id = JSON.parse(idc);
    var idobj = {
      'id': id.id,
      'comment': id.comment
    }
    console.log(idobj);


  }

  deletePost(id) {
    // var idobj = {
    //   'id': id
    // }
    console.log("in delete in lists");


    // console.log('indeletepost');
  }

  specificPost(id) {

    // this.router.navigate(['../', { id: id }], { relativeTo: this.route });
  }


  like(id) {
    console.log(id)
    // this.message = $event
  }


}
