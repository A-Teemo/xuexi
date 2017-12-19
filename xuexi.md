## 文章轮播　鼠标悬浮停止
```
#con2 {
  height: 60px;
  border: 1px solid #000;
  overflow: hidden;
}

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
