import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
// import { PostdetailsComponent } from '../postdetails/postdetails.component';

let AdminRoutes : Routes    = [

  {path:"", component :ErrorComponent }

]

@NgModule({
  declarations:
  [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class LazyloadModule { }
