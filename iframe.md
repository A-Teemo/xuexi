## 如何让iframe自适应和a链接局部跳转
```
<dl class="layui-nav-child">
  <dd><a href="help.html" target="myFrame">列表一</a></dd>
  <dd><a href="check.html" target="myFrame">列表二</a></dd>
  <dd><a href="index.html" target="myFrame">列表三</a></dd>
  <dd><a href="">超链接</a></dd>
</dl>


<div class="layui-body">
  <!-- 内容主体区域 -->
  <iframe src="index.html" width="100%" height="600px" name="myFrame" frameborder="0" scrolling="auto" id="mainiframe" onload="iframeAutoFit(test)" ></iframe>
</div>

<script>
function changeFrameHeight(){
        var ifm= document.getElementById("mainiframe");
        ifm.height=document.documentElement.clientHeight-56;
    }
    window.onresize=function(){ changeFrameHeight();}
    $(function(){changeFrameHeight();});

</script>
```
