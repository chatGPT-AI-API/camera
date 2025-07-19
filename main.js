const { app, BrowserWindow } = require('electron')

/**
 * 创建浏览器窗口
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载本地摄像头页面
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

// 退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})