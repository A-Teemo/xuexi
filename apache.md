## 安装apache web服务器
```
安装步骤：
1. sudo apt-get update
2. sudo apt-get install tasksel
3. sudo tasksel   (LAMP server )空格选中在回车
CGI
CGI(Common Gateway Interface) 是WWW技术中最重要的技术之一，有着不可替代的重要地位。CGI是外部应用（CGI程序）与Web服务器之间的接口标准，是在CGI程序和Web服务器之间传递信息的过程。(引自百度百科)
配置CGI步骤：
sudo ln -s /etc/apache2/mods-available/cgi.load     /etc/apache2/mods-enabled/cgi.load
重启 apache 服务器 service apache2 restart
需要运行的cgi文件的存放路径为 /usr/lib/cgi-bin
```
