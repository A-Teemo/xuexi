## 隐藏或透明
```
opacity, 应用到整个元素中,元素后代都受影响且无法改变
rgba中的透明度,不会影响后代

display(block:显示;none:隐藏)中的隐藏让元素彻底消失,不占任何位置(节点消失)
visibility(visible:显示;hidden:隐藏)隐藏的元素还占位置,知识单纯隐藏
```
## 直接在页面中显示代码
```
使用
<code>     </code>
<pre>      </pre>
```
## 用div实现文本输入区域
```
contenteditable用于实现文本输入区域
<div id="text" contenteditable="true"></div>
此方法不能使用.value去获取值,需要用.innerHTML去获取
```
## ::nth-child　伪元素
```
1、first-child
first-child表示选择列表中的第一个标签。代码如下：
li:first-child{background:#090}
上面的意思是，li 列表中的 第一个li模块的背景颜色。

2、last-child
last-child表示选择列表中的最后一个标签，代码如下：
li:last-child{background:#090}

3、nth-child(3)
表示选择列表中的第3个标签，代码如下：
li:nth-child(3){background:#090}
上面代码中的3也可以改成其它数字，如4、5等。想选择第几个标签，就填写几。

4、nth-child(2n)
这个表示选择列表中的偶数标签，即选择 第2、第4、第6…… 标签。

5、nth-child(2n-1)
这个表示选择列表中的奇数标签，即选择 第1、第3、第5、第7……标签。

6、nth-child(n+3)
这个表示选择列表中的标签从第3个开始到最后。

7、nth-child(-n+3)
这个表示选择列表中的标签从0到3，即小于3的标签。

8、nth-last-child(3)
这个表示选择列表中的倒数第3个标签
```
## css3新特性
```
线性渐变:
(渐变只能代替图片，不能代替颜色)
	background: linear-gradient(to bottom , red, white);

径向渐变:
/* ellipse 用于设置椭圆*/
background: radial-gradient(ellipse , yellow , red, pink,blue);

过渡:
transition:
transition-property 设置过渡属性
transition-duration 设置过渡时间
transition-timing-function 设置过渡速度
transition-delay 设置过渡延时


2D转换 transform
移动 translate(x, y) 可以改变元素的位置，x、y可为负值.
a) 移动位置相当于自身原来位置
b) x轴向右，y轴正方向朝下
缩放 scale(x, y) 可以对元素进行水平和垂直方向的缩放，x、y的取值可为小数.
旋转 rotate(deg) 可以对元素进行旋转，正值为顺时针，负值为逆时针.
(transform-origin)设置旋转点
<percentage>：用百分比指定坐标值。可以为负值。
<length>：用长度值指定坐标值。可以为负值。
left：指定原点的横坐标为left
center①：指定原点的横坐标为center
right：指定原点的横坐标为right
top：指定原点的纵坐标为top
center②：指定原点的纵坐标为center
bottom：指定原点的纵坐标为bottom
倾斜 skew(deg, deg) 可以使元素按一定的角度进行倾斜.

3D转换 transform
移动 translate3d(value,value,value) 可以改变元素的位置.
缩放 scale3d(x, y, z), scaleX(x) .
旋转 rotate3d(x,y,z,deg), rotateX(deg) 可以对元素进行旋转.
倾斜 skew(deg, deg),skewX(deg) ,skewY(deg)可以使元素按一定的角度进行倾斜
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
代码：
a{
  animation: myfirst   5s 　　linear 　2s　 　infinite;
  动画　　　　 动画名　  总时(秒)　速度曲线　开始后　　次数
}
//创建动画
@keyframes myfirst
{
0% {left: 0;top: 0;}
25% {background: yellow;left: 600px;transform:rotateZ(360deg);}
50% {background: blue;left: 1200px;transform:rotateZ(720deg)}
75% {background:green; left:600px;transform:rotateZ(360deg);}
100% {background: red;left: 0;transform:rotateZ(0deg);}
}
```
## H5新特性(视频，音频)
```
音频:
<audio autoplay(自动播放)  loop(循环播放)  controls(显示控制面板)>

      <!-- source是为了指定多种格式，确保可以播放  -->
      <source src="./music/rushus-modal_blues.mp3" >
      <source src="./music/rushus-modal_blues.ogg" >
      浏览器不支持audio
 </audio>

video (视频)
<!--
    https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement

    javascript控制video的属性，方法：
    muted   //静音,默认不静音,为false
    currentTime //快进
    duration	媒体以秒为单位的总长度时间，如果媒体不可用，则为0.  如果媒体可用，但时间长度未知, 值为NAN. 如果媒体是以stream形式传输并且没有预定长度，
  则值为Inf。
    volume	<input id="volume" type="range" value="0.5" min='0' max='1' step="0.1">
    play()  //播放
    pause()  //暂停
    playbackRate (0.25~0.5之间的数字， 1.0为正常)//加速减速

    timeupdate事件（更新）
    loadedmetadata 事件（当视频的元数据加载完毕时，就会触发）

//全屏
      function fullScreen(elem) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen();
          //webkit核心的问题
          // elem.style.width = "100%";
          // elem.style.height = "100%";
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }

      //取消全屏
      function cancelFullScreen() {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
   -->
```
## H5新特性(表单)
```
HTML5中制定了一系列语义化标签：
section：独立的内容节块，一般包含标题和内容
article：一种特殊的section，定义文档中的具体的文章内容
nav：页面导航的链接组
aside：标签用来装载非正文的内容，此标签中的文字权重低
header：定义文档的页眉，不仅仅是文档的页头可以使用header，一个独立块的头部也应该使用header
footer：定义section或document的页脚

智能表单
新增表单类型
email - 限定输入内容为邮箱地址，表单提交时会校验格式
url - 限定输入内容为URL，表单提交时会校验格式
number - 限定输入内容为数字，表单提交时会校验格式
range - 数值范围选择器
Date Pickers - 日期时间选择器
样式不能修改，移动端用的比较多，因为移动端显示的是系统的时间或日期选择器
1.date - 选取日、月、年
2.month - 选取月、年
3.week - 选取周和年
4.time - 选取时间（小时和分钟）
5.datetime - 选取时间、日、月、年，浏览器兼容性不好，效果等同于datetime-local
6.datetime-local - 选取本地时间、日、月、年
search - 搜索域，语义化，表示定义搜索框

表单属性
form
1.autocomplete 设置整个表单是否开启自动完成 on|off
2.novalidate 设置H5的表单校验是否工作, true 不工作,不加该属性代表校验
input:
autocomplete 单独设置每个文本框的自动完成
1.autofocus 设置当前文本域页面加载完了过后自动得到焦点
2.form 属性是让表单外的表单元素也可以跟随表单一起提交
3.form overrides
4.formaction 在submit上重写表单的特定属性，当点击当前submit时会以当前值使用
5.formenctype
6.formmethod
7.formnovalidate
8.formtarget
9.list 作用就是指定当前文本框的自动完成列表的数据 datalist 在界面上是看不见的，只是用于定义数据列表的
10.min / max / step
min max 限制值的范围，但是不会再输入时限制，提交时校验
step设置的是每次加减的增量
主要使用在number range datepicker上
11.multiple 文本域的多选
12.pattern 设置文本框的匹配格式（正则）
13.placeholder 文办占位符
14.required 限制当前input为必须的
```

## IE兼容
```
兼容IE9以下:
<!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>     //兼容html5新标签
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>	//兼容媒体查询
<![endif]-->
```
