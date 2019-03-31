import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
// import { BehaviorSubject } from 'rxjs';

@Injectable()
// {
//   providedIn: 'root'
// }
export class PostsService {

  constructor(private _httpClient: HttpClient) { }

  // getAllPosts = new BehaviorSubject(this.getPosts());

  getAllPosts() {
    return this._httpClient.get('http://localhost:3000/api/posts');
    // return posts;
    // this._httpClient.get('http://localhost:3000/api/posts').subscribe(data => {
    //   console.log(data);
    // })
  };

  getAllComments() {
    return this._httpClient.get('http://localhost:3000/api/comments');
  };

  getPost() {
    return this._httpClient.get('http://localhost:3000/api/postById')
  }


  createPost(postObj) {
    return this._httpClient.post('http://localhost:3000/api/post', postObj)

  }

  deletePost(id) {
    return this._httpClient.delete('http://localhost:3000/api/posts/delete' + `/${id}`)
  }

  postComment(idobj) {
    // var idobj = { 'id': id };
    this._httpClient.post('http://localhost:3000/api/post/comment', idobj)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
