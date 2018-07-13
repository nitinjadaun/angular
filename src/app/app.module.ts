import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';
import { HeroPipe } from './hero.pipe';
import { FancyTitleDirective } from './fancy-title.directive';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    HeroPipe,
    FancyTitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
