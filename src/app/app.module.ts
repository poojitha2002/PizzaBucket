import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';
import { F3Component } from './f3/f3.component';
import { F4Component } from './f4/f4.component';
import { F5Component } from './f5/f5.component';
import { F6Component } from './f6/f6.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { AboutqComponent } from './aboutq/aboutq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    F1Component,
    F2Component,
    F3Component,
    F4Component,
    F5Component,
    F6Component,
    AboutUsComponent,
    AboutComponent,
    AboutqComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
