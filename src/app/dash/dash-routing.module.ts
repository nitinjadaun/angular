import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './../dash/component/home/home.component';
import { DashboardComponent }   from './../dash/component/dashboard/dashboard.component';
import { LoginComponent }   from './../login/login.component';
import { DashComponent } from "./dash.component";

const routes: Routes = [
    {
        path: '',
        component: DashComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'dashboard', component: DashboardComponent }
        ]
    },
    { path: 'home', component: HomeComponent },

];
export const routing = RouterModule.forChild(routes);
