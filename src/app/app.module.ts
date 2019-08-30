import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponentComponent } from './about/about-component.component';
import { ContactComponentComponent } from './contact/contact-component.component';
import { BookserviceComponentComponent } from './bookservice/bookservice-component.component';
import { CoursesComponent } from './courses/courses.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import {} from 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    AppRoutingModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

   constructor(library: FaIconLibrary) {
       
       library.addIconPacks(fas);
       library.addIcons(faCoffee);
      }

}
