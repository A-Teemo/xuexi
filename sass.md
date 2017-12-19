## sass安装步骤
```
sudo apt-get install ruby-sass		(sudo apt-get install ruby)
sudo gem install

查询版本:sudo --v
```
## sass配置
```
sass input.scss output.css 编译生成css文件
sass --watch input.scss:output.css 监视文件改动并自动编译更新css
如果你的目录里有很多 Sass 文件，你也可以使用Sass命令来监视整个目录,
sass --watch sass:css
注意： sass是存放scss源文件的目录
      stylesheets是生成css文件的目录
sass 监听目录时要求目录的绝对路径不能包含中文

使用 sass –help 可以列出完整的帮助文档
```

## sass使用方法
```
默认变量
sass的默认变量仅需要在值后面加上!default即可。

多值变量
多值变量分为list类型和map类型，简单来说list类型有点像js中的数组，而map类型有点像js中的对象。
list
list数据可通过空格，逗号或小括号分隔多个值，可用nth($var,$index)取值。
map
map数据以key和value成对出现，其中value又可以是list。格式为：$map: (key1: value1, key2: value2, key3: value3);。可通过map-get($map,$key)取值。

#{ }	一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以#{$variables}形式使用

嵌套(Nesting)
sass的嵌套包括两种：一种是选择器的嵌套；另一种是属性的嵌套。我们一般说起或用到的都是选择器的嵌套。
选择器嵌套
所谓选择器嵌套指的是在一个选择器中嵌套另一个选择器来实现继承，从而增强了sass文件的结构性和可读性。
在选择器嵌套中，可以使用&表示父元素选择器
#top_nav{
  line-height: 40px;
  text-transform: capitalize;
  background-color:#333;
  li{
    float:left;
  }
  a{
    display: block;
    padding: 0 10px;
    color: #fff;

    &:hover{
      color:#ddd;
    }}}
属性嵌套
所谓属性嵌套指的是有些属性拥有同一个开始单词，如border-width，border-color都是以border开头。
.fakeshadow {
  border: {
    style: solid;
    left: {
      width: 4px;
      color: #888;
    }
    right: {
      width: 2px;
      color: #ccc;
    }}}



@at-root   跳出选择器嵌套,不能跳出媒体

混合(mixin)
sass中使用@mixin声明混合，可以传递参数，参数名以$符号开始，多个参数以逗号分开，也可以给参数设置默认值。声明的@mixin通过@include来调用。
无参数mixin
@mixin nopadding {
  margin: 0;
  padding: 0;
}
@mixin opacity($opacity:50){
  opacity: $opacity / 100;
}
.one {
  @include nopadding;
  color: red;
  @include opacity(60) ;
}
.two {
  @include nopadding;
  color: red;
  @include opacity;
}
多个参数mixin
调用时可直接传入值，如@include传入参数的个数小于@mixin定义参数的个数，则按照顺序表示，后面不足的使用默认值，
如不足的没有默认值则报错。除此之外还可以选择性的传入参数，使用参数名与值同时传入。
@mixin shadow($shadow...){
  box-shadow: $shadow;
}
.three {
  @include shadow(1px 1px 1px green,3px 3px 3px red, 4px 4px 4px yellow);
}

@extend  继承
@content
代码day17,第四个

占位选择器%

@if语句判断
@for循环,@each循环
```
