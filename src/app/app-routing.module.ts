import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/feature/home/home.component';
import { HeroesComponent } from '@app/feature/heroes/heroes.component';
import { HeroComponent } from '@app/feature/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes/:id',
    component: HeroComponent
  },
];

@NgModule({
  // RouterModule.forRoot(routes: Route[], config?: ExtraOptions) 创建一个带有所有路由器服务提供商和指令的模块。它还可以（可选的）设置一个应用监听器，来执行首次导航
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
