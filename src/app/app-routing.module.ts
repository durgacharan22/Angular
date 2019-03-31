import { ListPostsLowerComponent } from './posts/list-posts/list-posts-lower/list-posts-lower.component';
import { AuthRoutesGuard } from './posts/auth-routes.guard';
import { HomeComponent } from './posts/home/home.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { LoginComponent } from './posts/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './posts/register/register.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthRoutesGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'createpost', component: CreatePostsComponent, canActivate: [AuthRoutesGuard] },
  { path: 'posts', component: ListPostsComponent, canActivate: [AuthRoutesGuard] },
  { path: 'post/:id', component: ListPostsLowerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

