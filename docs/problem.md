<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 23:25:54
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 23:39:03
 * @Descripttion: 
 -->
 ### 1、项目验证
- 本项目主要是为了测试weex路由对应钉钉的返回
- 前两天，遇到的问题是，运行打包命令后，在本地起了个服务器，将代码运行起来，在钉钉中，点击返回会退出应用，经(ding-vue-vant)[https://github.com/841660202/ding-vue-vant]项目测试，发现单页面应用也是可以正常使用的，所以验证，weex是否web包是否可以
> 总结： 经验证，weex的web包是否可以按照预期进行页面跳转的

### 2、此项目与ding-vue-vant
weex-ding
- 采用weex实现移动web开发，使用飞猪 weex-ui库实现，支持iOS Android  相对来说比 ding-vue-vant 要好一些
  
(ding-vue-vant)[https://github.com/841660202/ding-vue-vant] 
- 是一个移动端web项目，借助于有赞移动端vant ui 库进行开发，属于正统vue开发

### 3、weex-ding 现存问题
- 按需加载问题，在微应用开启时候会全量加载缓慢