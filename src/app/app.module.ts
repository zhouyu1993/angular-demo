import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from '@app/feature/home/home.component';
import { HeroesComponent } from '@app/feature/heroes/heroes.component';
import { HeroComponent } from '@app/feature/hero/hero.component';
import { HeroDetailComponent } from '@app/shared/components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
  ],
  imports: [
    // https://angular.cn/api/platform-browser/BrowserModule
    BrowserModule,
    // https://angular.cn/api/common/http/HttpClientModule
    HttpClientModule,
    // https://angular.cn/api/forms/FormsModule
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
