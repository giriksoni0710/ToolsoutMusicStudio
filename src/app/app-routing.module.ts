import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponentComponent } from './about/about-component.component';
import { ContactComponentComponent } from './contact/contact-component.component';
import { BookserviceComponentComponent } from './bookservice/bookservice-component.component';


const routes: Routes = [

  {path:'', component: HomeComponentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'contact', component: ContactComponentComponent},
  {path: 'bookservice', component: BookserviceComponentComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
