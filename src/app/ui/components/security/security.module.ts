import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TreeModule } from 'angular-tree-component';

import { ProfilesComponent } from './profiles/profiles.component';

const routes : Routes = [
    { path: 'profiles', component: ProfilesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TreeModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
      ProfilesComponent
  ],
  exports: [
      ProfilesComponent
  ]
})
export class SecurityModule {}
