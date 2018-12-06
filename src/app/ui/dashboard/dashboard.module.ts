import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleComponent } from './title/title.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '../components/resume/resume.component';

const routes : Routes = [
    { path: '', component: ResumeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    TitleComponent,
    ResumeComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
