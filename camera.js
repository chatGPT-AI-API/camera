const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture');

// 访问摄像头
async function initCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });
        video.srcObject = stream;
    } catch (err) {
        console.error('摄像头访问失败:', err);
        alert('无法访问摄像头，请确保已授予权限');
    }
}

// 拍照功能
function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // 下载照片
    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'photo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 事件监听
captureBtn.addEventListener('click', capturePhoto);

// 初始化相机
window.addEventListener('DOMContentLoaded', initCamera);