import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {SkillsComponent} from '../skills/skills.component';
import {PreviousworkComponent} from '../previouswork/previouswork.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'previouswork',
    component: PreviousworkComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
