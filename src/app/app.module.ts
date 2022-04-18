import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { SignupComponent } from './signup/signup.component';

import { HeaderComponent } from './header/header.component';



import { LoginComponent } from './login/login.component';






@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,



    SignupComponent,

    HeaderComponent,

    
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
