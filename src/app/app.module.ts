import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { BBComponent } from './bb/bb.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    EditPostComponent,
    DetailPostComponent,
    NewPostComponent,
    BBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
