import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './ui/dashboard/dashboard.module';

import { ToastNoAnimationModule } from 'ngx-toastr';
import { UnderConstructionComponent } from './ui/components/under/under-construction/under-construction.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UnderConstructionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        DashboardModule,
        ReactiveFormsModule,
        ToastNoAnimationModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
