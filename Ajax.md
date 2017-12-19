## ajax创建和使用
```
创建XMLHttpRequest对象
// 兼容低版本ie浏览器的代码,对于现代浏览器可以省略部分代码
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
         if (typeof arguments.callee.activeXString != "string"){
            var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp"], i, len;
            for (i=0,len=versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex){
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
     } else {
            throw new Error("No XHR object available.");
    }
}

var xhr =  createXHR();
----------------------------------------------------------------------------
post请求
// 1 .创建一个卡可以发送Ajax的对象
var xhr = createXHR();
// 2 .调用open()发送,准备发送一次post请求
xhr.open("post","/login",true);
// 4 .准备接收服务端发来的数据
xhr.onreadystatechange = function () {
          //只等待状态为4的
          if (xhr.readyState === 4){

            //判断是成功的状态
            if (xhr.status >= 200 && xhr.status < 300 ){
              //成功是，打印服务的响应数据

              if (xhr.response === 'ok'){
                location.href = "https://www.jd.com";
              } else {

                $(".error").eq(1).css("visibility", "visible");
              }
            }
          }
        };
//3. 调用send方法，发送一次HTTP请求
        //发送post请求时，send方法要填写数据了

        var data = "name=" + user + "&passwd=" + passwd + "&gender=" + gender;
        xhr.send(data);
```
