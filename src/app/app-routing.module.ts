import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutqComponent } from './aboutq/aboutq.component';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';
import { F3Component } from './f3/f3.component';
import { F4Component } from './f4/f4.component';
import { F5Component } from './f5/f5.component';
import { F6Component } from './f6/f6.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
{path:'f1',component:F1Component},
{path:'f2',component:F2Component},
{path:'f3',component:F3Component},
{path:'f4',component:F4Component},
{path:'f5',component:F5Component},
{path:'f6',component:F6Component},
{path:'aboutq',component:AboutqComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutqComponent]