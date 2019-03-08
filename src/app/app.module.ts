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
  // 在当前模块的注入器中可用的一组可注入对象，Provider[]。https://www.angular.cn/api/core/Provider
  providers: [],
  // 属于该模块的一组组件、指令和管道（统称可声明对象），any[]。
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
  ],
  // 这里列出的 NgModule 所导出的可声明对象可用在当前模块内的模板中 any[]。
  imports: [
    // https://angular.cn/api/platform-browser/BrowserModule
    BrowserModule,
    // https://angular.cn/api/common/http/HttpClientModule
    HttpClientModule,
    // https://angular.cn/api/forms/FormsModule
    FormsModule,
    AppRoutingModule
  ],
  // 此 NgModule 中声明的一组组件、指令和管道可以在导入了本模块的模块下任何组件的模板中使用，导出的这些可声明对象就是该模块的公共 API，any[]。
  exports: [],
  // 定义此 NgModule 中要编译的组件集，这样它们才可以动态加载到视图中，any[]。
  entryComponents: [],
  // 当该模块引导时需要进行引导的组件。列在这里的所有组件都会自动添加到 entryComponents 中，any[]。
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
