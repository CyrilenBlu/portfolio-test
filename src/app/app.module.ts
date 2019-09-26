import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PreviousworkComponent} from './previouswork/previouswork.component';
import {SkillsComponent} from './skills/skills.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from '@angular/material';
import {DialogContactComponent} from './contact/dialog/dialog-contact.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PreviousworkComponent,
    SkillsComponent,
    NavComponent,
    DialogContactComponent
  ],
  entryComponents: [
    DialogContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
