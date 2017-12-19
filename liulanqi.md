## 浏览器的兼容性问题
```
中文版论坛：解决错误segmentfault
英文版论坛：解决错误stackoverflow
IE8一下透明度没用，解决方案： filter: alpha(opacity=50);
屏幕宽度不能小于300 :min-height: 300px;( 低版本的ie会有不支持 min-height属性)
   /*设置最小高度的问题*/:overflow: hidden

  _background: yellow; ( _:IE6以下)
  *background: yellow;(*:IE7以下)
  background: blue\9;( \9:IE6以上)
  background: purple\0;(\0:IE8以上)

同时引入两个jQuery文件应该怎么办
  var $$ = $.noConflict();//将最后一个赋值变量上
    console.log($.fn.jquery);//3.0.0
    //$$ === jQuery仍然是1.12.4版本
    console.log($$.fn.jquery);//1.12.4
    console.log(jQuery.fn.jquery);//1.12.4

## link的作用
*  引入样式表(浏览器是单独加载样式表)
*  开启dns预解析
*  引入tab的icon

## @import
* @import 引入样式表只能在样式中填写
* @import 引入样式表是阻塞加载的（如果该样式表加载不完，那么后续的其他内容都不能解析）
```

## bootstrap 兼容IE
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- 在IE兼容模式显示出来-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 媒体查询 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>导航</title>
    <!-- 导入bootstrap框架文件 -->
    <link rel="stylesheet" href="./bootstrap-3.3.7/dist/css/bootstrap.min.css">
  </head>
  <body>
    <!-- 导入jQuery文件 -->
    <script src="./js/jquery-3.0.0.min.js"></script>
    <!-- 导入bootstrap样式 -->
    <script src="./bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
兼容IE9以下的浏览器
  <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </body>
</html>
```
