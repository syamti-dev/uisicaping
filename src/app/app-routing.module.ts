import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login/login.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UnderConstructionComponent } from './ui/components/under/under-construction/under-construction.component';

const routes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
        children: [
            { path: '', loadChildren: './ui/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] }
        ]
    },
    { path: 'security', loadChildren: './ui/components/security/security.module#SecurityModule', canActivate: [AuthGuardService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: UnderConstructionComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
      RouterModule.forRoot(routes, { enableTracing: false })
  ]
})
export class AppRoutingModule { }
