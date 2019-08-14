import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponentComponent } from './about/about-component.component';
import { ContactComponentComponent } from './contact/contact-component.component';
import { BookserviceComponentComponent } from './bookservice/bookservice-component.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    
    ContactComponentComponent,
    BookserviceComponentComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
