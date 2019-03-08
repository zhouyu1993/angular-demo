# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.x.

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

# Learning

* angular-demo 工作空间-根目录名
  * e2e 端到端测试项目
  * src 骨架应用项目 [index.html、main.ts、app/app.module]
    * app
      * app.component 根组件
      * app-router.module 路由器
      * feature 路由页面
      * shared 组件
        * components UI组件
        * utils JS组件
      * core 数据/接口
    * assets 静态资源
    * environments 环境变量
  * .editorconfig 编辑器配置文件
  * .gitignore git忽略提交规则配置文件
  * .npmrc npm配置文件
  * angular.json angular编译配置文件
  * package-lock.json npm锁包文件
  * package.json 项目描述文件
  * proxy.conf.json angular设置proxy配置文件
  * README.md 项目说明文件
  * tsconfig.json TypeScript编译配置文件
  * tslint.json TypeScript代码检测规则配置文件

JIT 即时编译，AOT 预编译

## 设置别名 `alias` (类似 webpack)

[tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

[module-resolutio](http://www.typescriptlang.org/docs/handbook/module-resolution.html)

[module-resolutio](https://www.tslang.cn/docs/handbook/module-resolution.html)

[modules](http://www.typescriptlang.org/docs/handbook/modules.html)

[modules](https://www.tslang.cn/docs/handbook/modules.html)

`baseUrl` + `paths`

in `tsconfig.json` :

``` bash
{
  # ...
  "compilerOptions": {
    # This must be specified if "paths" is.
    "baseUrl": "./",
    # 此处映射是相对于 "baseUrl"
    "paths": {
      "@src/*": [
        "src/*"
      ],
      "@app/*": [
        "src/app/*"
      ]
    },
  }
  # ...
}
```

## TypeScript

[泛型](https://www.typescriptlang.org/docs/handbook/generics.html)

[泛型](https://www.tslang.cn/docs/handbook/generics.html)

`function<T>()`

## [Component](https://angular.cn/api/core/Component)

selector — 组件的选择器（CSS 元素选择器），用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。

templateUrl — 组件模板文件的位置。

styleUrls — 组件私有 CSS 样式表文件的位置。

## 模版语法

### [NgModel](https://angular.cn/api/forms/NgModel)

`[(ngModel)]="property"`

数据双向绑定

### [NgForOf](https://angular.cn/api/common/NgForOf)

`*ngFor="let item of property"`

列表循环

* 可以使用管道
* as

* index
* count
* first
* last
* even
* odd

trackBy 类似 vue 中 v-for 的 `key` ?

### [NgIf](https://angular.cn/api/common/NgIf)

`*ngIf="property"`

条件判断

### [NgSwitch](https://angular.cn/api/common/NgSwitch)

switch 语句

### attribute、class 和 style 绑定

`[attr.attrName]="property"`

`[class.className]="property"`

`[style.styleName]="property"`

[NgClass](https://angular.cn/api/common/NgClass)

[NgStyle](https://angular.cn/api/common/NgStyle)

[@angular/common 里的指令](https://angular.cn/api/common#指令)

### 属性绑定

`[src]="property"`

`[disabled]="property"`

### 事件绑定

`(click)="onClickFunction($event)"`

支持所有 [Events](https://developer.mozilla.org/zh-CN/docs/Web/Events)

`$event` 非必填，但涉及到子组件向父组件通信，发送 `EventEmitter` 事件，必须通过 `$event` 对象来访问载荷。

`$event` 的类型。

传入 `$event` 是靠不住的做法，推荐使用 Angular 的模板引用变量 ( #var )。

### 模板引用变量 ( #var )

`ref-prefix`

`prefix.property`

有点类似 vue 中 ref

### 模板表达式操作符

#### 管道操作符 (|)

[pipe](https://angular.cn/api/core/Pipe)

类似于 vue 中的过滤器

多个管道串联表达式

对管道使用参数

[@angular/common 里的管道](https://angular.cn/api/common#管道)

#### 安全导航操作符 ( ?. ) 和空属性路径

`The current hero's name is {{currentHero.name}}`

当 `currentHero` 为空，会报错。

`The current hero's name is {{currentHero?.name}}`

当 `currentHero` 为空，不会报错，显示为 `The current hero's name is`

当然涉及到这种属性路径是否为空的判断，我们可以用 `NgIf` 或者 `&&`，但显得笨重。

像 `a?.b?.c?.d` 这种就显得很完美。

#### 非空断言操作符（!)

``` html
<!--No hero, no text -->
<div *ngIf="hero">
  The hero's name is {{hero!.name}}
</div>
```

与安全导航操作符不同的是，非空断言操作符不会防止出现 null 或 undefined。 它只是告诉 TypeScript 的类型检查器对特定的属性表达式，不做 "严格空值检测"。

如果你打开了严格控制检测 `--strictNullChecks`，那就要用到这个模板操作符，而其它情况下则是可选的。

### 类型转换函数 $any （$any( <表达式> )）

有时候，绑定表达式可能会报类型错误，并且它不能或很难指定类型。要消除这种报错，你可以使用 $any 转换函数来把表达式转换成 any 类型。

``` html
<!-- Accessing an undeclared member -->
<div>
  The hero's marker is {{$any(hero).marker}}
</div>
```

在这个例子中，当 Angular 编译器把模板转换成 TypeScript 代码时，$any 表达式可以防止 TypeScript 编译器报错说 marker 不是 Hero 接口的成员。

$any 转换函数可以在绑定表达式中任何可以进行方法调用的地方使用。

?

## 生命周期钩子



## 组件之间通信

所有的组件都是指令。

在子组件中用 `@Input` 装饰器来让某个属性可以在父组件中绑定，类似 `props`。在父组件用 `属性绑定` 语法来让父组件控制子组件。

例如在父组件 `<app-hero>` 调用子组件 `<app-hero-detail>`：

`<app-hero-detail [hero]="selectedHero" (editRequest)="editHero($event)"></app-hero-detail>`

这代表父组件中参数 `selectedHero` 跟子组件中参数 `hero` 绑定，表父组件中事件 `editHero` 来接收子组件中 `EventEmitter` 事件 `editRequest` 传递的值。

[EventEmitter](https://angular.cn/api/core/EventEmitter)

## service

把数据访问逻辑重构到了 service 类中

在根注入器中把 service 注册为该服务的提供商，以便在别处可以注入它

使用 Angular 依赖注入机制把它注入到了组件中

给 service 中获取数据的方法提供了一个异步的函数签名

## 启用 HTTP 服务

HttpClient 是 Angular 通过 HTTP 与远程服务器通讯的机制。

要让 HttpClient 在应用中随处可用，请：

  * 打开根模块 AppModule
  * 从 @angular/common/http 中导入 HttpClientModule 符号
    ``` js
    import { HttpClientModule } from '@angular/common/http';
    ```
  * 把它加入 `@NgModule.imports` 数组

## HttpClient

[HttpClient](https://www.angular.cn/api/common/http/HttpClient)

`Angular HttpClient` 的方法会返回 `RxJS` 的 `Observable`。

使用 `RxJS` 的 `Observable` 和 `of()` 函数来模拟从服务器返回数据。

`of()` 函数来可以把数据处理为 `Observable`

[Observable 可观察对象](https://www.angular.cn/guide/observables)

[RxJS](https://www.angular.cn/guide/rx-library)

[Angular 中的 Observable 可观察对象](https://www.angular.cn/guide/observables-in-angular)

### [RxJS](https://github.com/reactivex/rxjs)

观察者模式、迭代器模式

`RxJS` 是基于观察者模式和迭代器模式以函数式编程思维来实现的。`RxJS` 中含有两个基本概念：`Observables` 与 `Observer`。`Observables` 作为被观察者，是一个值或事件的流集合；而 `Observer` 则作为观察者，根据 `Observables` 进行处理。

`Observables` 与 `Observer` 之间的订阅发布关系(观察者模式) 如下：

  * 订阅：`Observer` 通过 `Observable` 提供的 `subscribe()` 方法订阅 `Observable`。
  * 发布：`Observable` 通过回调 `next` 方法向 `Observer` 发布事件。

### 在 angular 中使用 fetch

[Observable 与 Promise](https://www.angular.cn/guide/comparing-observables)

[fetch 和 xhr/ajax 的区别](https://www.jianshu.com/p/71f756103df8)

[传统 Ajax 已死，Fetch 永生](https://github.com/camsong/blog/issues/2)

[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

## proxy

[angular-proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)

[webpack-devserver-proxy](https://webpack.js.org/configuration/dev-server/#devserver-proxy)

[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

## 路由

添加 AppRoutingModule

在一个独立的顶级模块中加载和配置路由器，它专注于路由功能，然后由根模块 AppModule 导入它。

``` js
// Routes 路由器配置，type Routes = Route[]
// RouterModule 添加路由器指令和服务提供商
import { Routes, RouterModule } from '@angular/router';
```

``` js
// 与当前组件相关的路由信息
import { ActivatedRoute } from '@angular/router';

const route = ActivatedRoute

// route.paramMap 返回 Observable<ParamMap>
route.paramMap.subscribe(params => {
  console.log(params.get('id'))
})

// route.snapshot.paramMap
console.log(route.snapshot.paramMap.get('id'))
```

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
