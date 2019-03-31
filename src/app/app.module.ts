import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './posts/login/login.component';
import { RegisterComponent } from './posts/register/register.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { NavbarComponent } from './posts/navbar/navbar.component';

import { PostsService } from './posts/posts.service';
import { UsersService } from './posts/users.service';
import { AuthService } from './posts/auth.service';
import { HomeComponent } from './posts/home/home.component';
import { ListPostsLowerComponent } from './posts/list-posts/list-posts-lower/list-posts-lower.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListPostsComponent,
    CreatePostsComponent,
    NavbarComponent,
    HomeComponent,
    ListPostsLowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthService,
    multi: true
  }, PostsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
