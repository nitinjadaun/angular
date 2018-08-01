import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../dash/component/header/header.component';
import { DashboardComponent } from './../dash/component/dashboard/dashboard.component';
import { HomeComponent } from './../dash/component/home/home.component';
import { DashComponent } from './dash.component';
import { routing } from './dash-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroPipe } from './pipes/hero.pipe';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [DashComponent,
      HeaderComponent,
      HomeComponent,
      DashboardComponent,
      HeroPipe
  ]
})
export class DashModule { }
