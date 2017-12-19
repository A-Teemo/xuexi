## canvas
```
1. 不要用CSS控制它的宽和高,会让图片拉伸，
2. 重新设置canvas标签的宽高属性会让画布擦除所有的内容。
3. 可以给canvas画布通过style属性设置其它属性（背景色， 边框等）
4. width和hegiht：默认300*150像素
```
## canvas绘制步骤
```
getContext(‘2d’) 用于获得画布上下文对象，然后才可以对画布进行操作，后面的参数是字符串的2d,2d表示当前的画布支持2D绘图，如果希望将当前画布支持3d,则传入”webgl”(不作为重点)。
var can = document.getElementById("canvas");

canvas有width,height属性
can.width = 600;
can.height= 600;

1.获得画布上下文(比喻:找到画板上的纸)
var cxt = can.getContext("2d");
2.开始绘制
cxt.beginPath();//表示重新开始绘制，和之前的绘制没有关联!!!!!!!

绘制直线
cxt.moveTo(0,0);//设置绘制路径的起点,其中x,y都是画布的原点为参考点
   	cxt.lineTo(100,150);//绘制的终点
   	cxt.lineTo(120,250);//会以上一个lineTo的坐标作为本次的起点
  	cxt.lineTo(220,20);
描边
cxt.strokeStyle = "red";//设置描边颜色
  	cxt.stroke();
内部填充
ctx.fill() , 对绘制的路径进行内部填充
绘制矩形
ctx.rect(x,y,width,height) 设置了矩形的路径，但是没有并没有填充和描边。
其中x,y是矩形的左上角，width，height用于设置矩形的宽度和高度。
绘制填充矩形: ctx.fillRect(x,y,width,height)绘制填充矩形
绘制描边矩形:ctx.strokeRect(x,y,width,height)绘制描边矩形
擦除矩形:ctx.clearRect(x,y,width,height)
绘制弧形:
ctx.arc	(x,y,r,sAngle,eAngle,counterclockwise), 用于绘制圆弧，其中(x,y) 用于设置圆弧的圆心坐标， r为圆的半径sAngle为开始弧度，eAngle为结束弧度，counterclockwise为true或者false决定是否逆时针，默认false。
ctx.arc(100,100,50,90*Math.PI/180, 180*Math.PI/180,false);

设置描边颜色:
ctx.strokeStyle 设置描边的颜色样式  //任何形式的颜色表达方式都可以
设置填充颜色:
ctx.fillStyle 设置填充的颜色样式
设置线条的宽度:
ctx.lineWidth 设置线条的宽度


绘制文本:
1. font 设置或返回文本内容的当前字体属性，font 属性使用的语法与 CSS font 属性相同。
ctx.font = "18px '微软雅黑'";
2. textAlign 设置或返回文本内容的当前对齐方式
start : 默认。文本在指定的位置开始。
end : 文本在指定的位置结束。
center: 文本的中心被放置在指定的位置。
left : 文本左对齐。
right : 文本右对齐。
ctx.textAlign = "start";
3.  textBaseline 设置或返回在绘制文本时使用的当前文本基线
alphabetic ： 默认。文本基线是普通的字母基线。
top ： 文本基线是 字符的顶端。。
hanging ： 文本基线是悬挂基线。
middle ： 文本基线是字符的正中。
ideographic： 文本基线是字符基线。
bottom ： 文本基线是字符的底端。
ctx.textBaseline="middle";

绘制图片:
1.context.drawImage(img,x,y);
其中x,y canvas左上角的坐标， img是绘制图片的dom对象。
2.context.drawImage(img,x,y,width,height);
width 绘制图片的宽度， height：绘制图片的高度
如果指定宽高，最好成比例，不然图片会被拉伸
    公式：设置高 = 原高度 / 原宽度 * 设置宽度;   
    设置宽 = 原宽度 / 原高度 *  设置高度;      
3.context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
对图片裁剪，并在画布上定位被剪切的部分
sx,sy 裁剪的以图片左上角为参考的坐标，
swidth：裁剪图片的宽度。
sheight:裁剪的高度
x,y canvas的坐标
width, height: 设置图片最终显示的大小

//给图片DOM对象注册 onload事件(图片加载成功之后会触发！！！！！)
    img.onload = function () {
      console.log("图片加载完毕");
      cxt.drawImage(img,0,0);
      cxt.drawImage(img,0,300,50,50);//指定尺寸
      cxt.drawImage(img,250,110,120,120,300,300,250,250);//可以对图片进行切片
    };

设置阴影:
常用属性：
shadowColor 设置或返回用于阴影的颜色
shadowBlur 设置或返回用于阴影的模糊级别,大于1的正整数，数值越高，模糊程度越大
shadowOffsetX 设置或返回阴影距形状的水平距离
shadowOffsetY 设置或返回阴影距形状的垂直距离

线性渐变:
线性渐变是一个对象
创建渐变对象： ctx.createLinearGradient(x0,y0,x1,y1);
其中：
x0:起点的横坐标
y0:起点的纵坐标
x1:结束点的横坐标
y1:结束点的纵坐标

    //创建一个线性渐变对象
    var lg = cxt.createLinearGradient(0,0,200,0);

    //指定渐变颜色和位置
    lg.addColorStop(0, "red");//添加一个渐变颜色，第一个参数介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
    lg.addColorStop(0.3, "green");
    lg.addColorStop(0.5, "yellow");
    lg.addColorStop(0.8, "pink");
    lg.addColorStop(1, "purple");

    //利用渐变对象
    cxt.fillStyle = lg;
    cxt.fillRect(0,0,200,100);//绘制形状必须在线性渐变的坐标范围内!!!!!!!!!!!

径向渐变
径向渐变也是对象：
创建对象： context.createRadialGradient(x0,y0,r0,x1,y1,r1);
其中：
x0:渐变的开始圆的横坐标
y0:渐变的开始圆的纵坐标
r0:渐变的开始圆的半径
x0:渐变的结束圆的横坐标
y0:渐变的结束圆的纵坐标
r1:渐变的结束圆形的半径
代码示例：  
var circle = ctx.createRadialGradient(300,300,50,300,300,200);
circle.addColorStop(0, 'red');
circle.addColorStop(0.5, 'blue');
circle.addColorStop(1, 'yellow');
ctx.fillStyle = circle ;
ctx.arc(300,300,200, 0, 2 * Math.PI);
ctx.fill();

绘制背景
绘制背景也是对象：
创建对象： ctx.createPattern(img,repeat) 方法在指定的方向内重复指定的元素
其中：
image ：规定要使用的图片、画布或视频元素。
repeat ： 默认。该模式在水平和垂直方向重复。
repeat-x ： 该模式只在水平方向重复。
repeat-y ： 该模式只在垂直方向重复。
no-repeat： 该模式只显示一次（不重复）。
之后绘制的区域才会有背景，没有绘制的没有背景

画布缩放
scale缩放的是整个画布，缩放后，继续绘制的图形会被放大或缩。
语法：context.scale(scalewidth,scaleheight)
scalewidth : 缩放当前绘图的宽度
scaleheight : 缩放当前绘图的高度

代码示例：   
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;
ctx.strokeRect(0,0,100,100);

ctx.scale(2,2);/*设置完之后,会影响后续的绘制*/
ctx.strokeRect(0,0,100,100);
ctx.strokeRect(100,100,10,10);

保存状态:
cxt.save()//保存当前状态
cxt.restore()//回到保存的上一个状态
***save和restore使用栈机制,后保存的先恢复
注意： 主要用于画布的位移，旋转，等操作。

画布原点移动
translate() 方法重新映射画布上的 (0,0) 位置。
设置整个画布的远点，会影响后边的绘制。
语法: ctx.translate(x, y);
其中： x, 表示 x轴偏移量
y, 表示 y轴的偏移量
ctx.translate(100,100);  /*整个画布的原点变为（100,100）影响后边的绘制*/
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;
ctx.strokeRect(0,0,200,200);

画布旋转
rotate(deg) 以画布原点顺时针旋转
ctx.rotate(20 * Math.PI / 180);/*整个画布以原点进行顺时针旋转*/
ctx.fillStyle = 'red';
ctx.fillRect(300,0,200,200);
ctx.fill();

画布透明
globalAlpha 是 Canvas 2D API 用来描述在canvas上绘图之前，设置图形和图片透明度的属性。数值的范围从 0.0(完全透明)到1.0(完全不透明)。画布透明，用于设置整个画布的透明度，影响的是全局。
cxt.globalAlpha = 0.8; //影响的是后边的透明度
    cxt.fillRect(300, 300, 100, 100);

    cxt.globalAlpha = 0.3; //影响的是后边的透明度
    cxt.fillStyle = "red";
    for (i = 0; i < 7; i++) {
      cxt.beginPath();
      cxt.arc(175, 175, 10 + 10 * i, 0, Math.PI * 2, true);
      cxt.fill();
    }

画布保存为图片
语法： canvas.toDataURL(type, encoderOptions);
其中：
type可选 , 图片格式，默认为image/png
encoderOptions可选，图片质量。取值范围为 0 到 1 。如果指定图片格式为 image/jpeg 或 image/webp。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
代码示例：
ctx.fillStyle = 'red';
ctx.fillRect(x, 10, 50,50);
img1.src = can.toDataURL('image/png', 1);
console.log(can.toDataURL('image/png',1);

画布渲染画布
一个画布的内容可以渲染到另一个画布上,使用ctx.drawImage()可以完成内容的渲染。
//将第一个画布上的某个区域绘制到第二个画布上
   	 cxt2.drawImage(can1,0,0,100,100,500,500,50,50);

贝塞尔曲线
贝塞尔曲线就是这样的一条曲线，它是依据任意的点坐标绘制出的一条光滑曲线。
CanvasRenderingContext2D.quadraticCurveTo() 是 Canvas 2D API 新增二次贝塞尔曲线路径的方法。它需要2个点。 第一个点是控制点，第二个点是终点。 起始点是当前路径最新的点，当创建二次贝赛尔曲线之前，可以使用 moveTo() 方法进行改变。
语法： ctx.quadraticCurveTo(cpx,cpy,x,y);
其中： 添加一个控制点
cpx 控制点的 x 轴坐标。
cpy 控制点的 y 轴坐标。
x 终点的 x 轴坐标。
y 终点的 y 轴坐标
示例代码：  
ctx.beginPath();
ctx.moveTo(50,20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

//起点和终点
ctx.fillStyle = 'blue';
ctx.fillRect(50, 20, 10, 10);
ctx.fillRect(50, 100, 10, 10);

//控制点
ctx.fillStyle = 'red';
ctx.fillRect(230, 30, 10, 10);



结束绘制
cxt.closePath();

```
