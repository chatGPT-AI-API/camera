# 简易网页相机应用

## 项目简介
这是一个基于HTML5和JavaScript的简易网页相机应用，可以直接在浏览器中使用摄像头拍照。

## 功能特性
- 实时摄像头预览
- 拍照功能
- 自动适应摄像头分辨率

## 使用方法

### 快速启动
1. 直接双击`index.html`文件在浏览器中打开
2. 或者使用命令行启动：
   ```bash
   start index.html  # Windows
   open index.html   # Mac
   xdg-open index.html  # Linux
   ```

### 开发模式
如果需要本地开发服务器，可以使用以下命令：
```bash
npx serve
```
然后访问 http://localhost:3000

### 使用步骤
1. 允许浏览器访问摄像头
2. 点击"拍照"按钮即可拍照
3. 照片数据会输出到控制台(console)

## 技术栈
- HTML5
- JavaScript
- MediaDevices API
- Canvas API

## 注意事项
- 需要在支持getUserMedia API的现代浏览器中运行
- 需要授予摄像头访问权限
- 照片数据默认输出到控制台，可以修改camera.js中的capturePhoto函数实现保存功能

## 未来改进
- 添加照片保存功能
- 支持滤镜效果
- 添加拍照倒计时