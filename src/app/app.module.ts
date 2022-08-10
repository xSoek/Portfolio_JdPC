import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WhoIAmComponent } from './components/who-i-am/who-i-am.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EdexpComponent } from './components/edexp/edexp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoIAmComponent,
    ProjectsComponent,
    EdexpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
