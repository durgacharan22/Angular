import { PostsService } from './../../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {ActivatedRoute}

@Component({
  selector: 'app-list-posts-lower',
  templateUrl: './list-posts-lower.component.html',
  styleUrls: ['./list-posts-lower.component.css']
})
export class ListPostsLowerComponent implements OnInit {

  addComment = "";
  @Input() public post;
  // @Input() public comments;
  // @Input() public addComment;
  @Input() public posts;
  postss: any;
  comments: any;
  post_id: any;
  // post: any;

  @Output() likeEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() commentEvent = new EventEmitter<string>();
  @Output() addCommentEvent = new EventEmitter<string>();

  like(id) {
    console.log(id)
    this.likeEvent.emit(id);
  }

  deletePost(id) {
    console.log("in delete in lower" + id)
    // this.deleteEvent.emit(id);
    this._postsService.deletePost(id)
      .subscribe(res => {
        console.log(res);
        this._router.navigate(["/posts"])
      },
        err => {
          console.log(err);
        });
  }

  comment(id) {
    var idobj = {
      id: id,
      comment: this.addComment
    }
    console.log(idobj);
    if (idobj.comment == "") {
      alert("enter something");
    } else {
      this._postsService.postComment(idobj);
      this._postsService.getAllComments().subscribe(data => {
        // console.log(data);
        this.comments = data;
      })
    }
    // this.commentEvent.emit(JSON.stringify(idobj));
  }

  constructor(private _route: ActivatedRoute, private _postsService: PostsService, private _router: Router) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this.post_id = id;
    console.log(id);

    this._postsService.getAllPosts().subscribe(data => {
      this.postss = data;
      console.log(typeof (data));
    })

    this._postsService.getAllComments().subscribe(data => {
      // console.log(data);
      this.comments = data;
    })
  }

}
