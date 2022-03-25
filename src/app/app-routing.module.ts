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
  // {path:'cart',canActivate:[SecurityServiceService],component:CartComponent},

  {path:'posts',component:PostsComponent},
  {path:'post-details/:id',component:PostdetailsComponent},
  // {path:'checkout',canActivate:[SecurityServiceService],component:CheckoutComponent,children:[
  //   {path:'address',component:AddressComponent},
  //   {path:'payment',component:PaymentComponent},
  //   {path:'cart',component:CartComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
