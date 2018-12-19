# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:9876/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##

* 工作空间-根目录名 angular-demo
  * 端到端测试项目 e2e
  * 骨架应用项目 src [index.html、main.ts、app/app.module]
    * 根组件 app-root [app/app.component]

## 命令

``` bash
ng generate component hero # 创建组件
ng generate service hero # 创建服务
```

ts (M 中间器，调用 C 去更新 V)

组件 UI 视图层 (V)

服务 api 数据层 (C)

## 设置 `alias`

`tsconfig.json` 和 `src/tsconfig.app.json`

## `@Component`

selector— 组件的选择器（CSS 元素选择器），用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。

templateUrl— 组件模板文件的位置。

styleUrls— 组件私有 CSS 样式表文件的位置。

## `NgModel`

指令实现了双向数据绑定。

## `*ngFor`

列表循环

## `*ngIf`

条件判断

## [class.className]

class 类绑定

## (click)

事件绑定

## 组件之间通信

在子组件中用 `@Input` 装饰器来让某个属性可以在父组件中绑定，类似 `props`。在父组件用 `属性绑定` 语法来让父组件控制子组件。

例如在父组件 `<app-hero>` 调用子组件 `<app-hero-detail>`：

`<app-hero-detail [hero]="selectedHero"></app-hero-detail>`

这代表父组件中参数 `selectedHero` 跟子组件中参数 `hero` 绑定。

## service

把数据访问逻辑重构到了 service 类中

在根注入器中把 service 注册为该服务的提供商，以便在别处可以注入它

使用 Angular 依赖注入机制把它注入到了组件中

给 service 中获取数据的方法提供了一个异步的函数签名

## HttpClient

`Angular HttpClient` 的方法会返回 `RxJS` 的 `Observable`。

使用 `RxJS` 的 `Observable` 和 `of()` 函数来模拟从服务器返回数据。

## 路由

添加 AppRoutingModule

在一个独立的顶级模块中加载和配置路由器，它专注于路由功能，然后由根模块 AppModule 导入它。

## 启用 HTTP 服务

HttpClient 是 Angular 通过 HTTP 与远程服务器通讯的机制。

要让 HttpClient 在应用中随处可用，请

* 打开根模块 AppModule，
* 从 @angular/common/http 中导入 HttpClientModule 符号，
  ``` js
  import { HttpClientModule } from '@angular/common/http';
  ```
* 把它加入 `@NgModule.imports` 数组。

## proxy

[angular-proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)

[webpack-devserver-proxy](https://webpack.js.org/configuration/dev-server/#devserver-proxy)

[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

# More

https://angular.cn/cli

https://angular.cn/guide/file-structure

https://angular.cn/guide/npm-packages

https://www.tslang.cn/docs/home.html

https://angular.cn/guide/aot-compiler

https://angular.cn/guide/build

https://angular.cn/guide/testing

https://angular.cn/guide/deployment

https://angular.cn/guide/browser-support

https://angular.cn/guide/updating

https://update.angular.io

https://angular.cn/guide/upgrade

https://angular.cn/guide/ajs-quick-reference

https://angular.cn/guide/cheatsheet

https://angular.cn/guide/styleguide

https://angular.cn/guide/glossary

https://angular.cn/api

https://update.angular.io
