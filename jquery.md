## 文章轮播　鼠标悬浮停止
```
#con2 {
  height: 60px;
  border: 1px solid #000;
  overflow: hidden;
}
.lieven{ background:#F0F2F3;}
<div id="con2">
    <ul>
         <li><a href="#">欢迎111111111111</a></li>
        <li><a href="#">欢迎22222222222</a></li>
        <li><a href="#">欢迎333333333333</a></li>
        <li><a href="#">欢迎4444444444444</a></li>
        <li><a href="#">欢迎555555555555</a></li>
        <li><a href="#">欢迎666666666666</a></li>
    </ul>
</div>

<script type="text/javascript">
    function AutoScroll(obj) {
        $(obj).find("ul:first").animate({
            marginTop: "-20px"
        }, 500, function () {
            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
        });
    }
    $(document).ready(function () {
        var myar = setInterval('AutoScroll("#con2")', 1000);
        //当鼠标放上去的时候，滚动停止，鼠标离开的时候滚动开始
        $("#con2").hover(function () { clearInterval(myar); },
        function () { myar = setInterval('AutoScroll("#con2")', 1000) });
    });
</script>
```
## 获取滚动条位置
```
<script type="text/javascript">
      $(window).scroll(function() {
        console.log($(window).scrollTop());
      });
</script>

```
--------------------------------------------------------------------------------------------
## 无缝滚动
```
<script type="text/javascript">
$(document).ready(function(){
  // JavaScript Document
(function($){
	$.fn.myScroll = function(options){
	var defaults = {
		speed:40,
		rowHeight:24
	};

	var opts = $.extend({}, defaults, options),intId = [];

	function marquee(obj, step){
    console.log(obj);
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
          console.log(this);
          console.log(123);
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
    console.log();
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});

		});

	}
})(jQuery);
$('#con2 li:even').addClass('lieven');
})
$(function(){
	$("#con2").myScroll({
		speed:40, //数值越大，速度越慢
		rowHeight:68 //li的高度
	});
});
</script>
```
