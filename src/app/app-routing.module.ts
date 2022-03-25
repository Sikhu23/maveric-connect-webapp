import { SecurityService } from './security.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},



  {path:'posts',canActivate:[SecurityService],component:PostsComponent},
  {path:'post-details/:id',canActivate:[SecurityService],component:PostdetailsComponent},
  {
    path: '**', canActivate:[SecurityService],
    loadChildren: () => import('./lazyload/lazyload.module')
    .then(m => m.LazyloadModule)
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
