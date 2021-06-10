import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { navBarComponent } from './nav-bar/nav-bar.component';
import { Error404component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    Error404component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot ([
      {
      path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path:'**', component: Error404component
      }
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
