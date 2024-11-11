// 定義圖片資料陣列，每個項目包含圖片的路徑和手指位置的相對座標（百分比）
const images = [
    { src: 'images/pic1.jpg', fingerX: 36.97, fingerY: 33.68 },
    { src: 'images/pic2.jpg', fingerX: 41.10, fingerY: 28.72 },
    { src: 'images/pic3.jpg', fingerX: 53.10, fingerY: 69.91 },
    { src: 'images/pic4.jpg', fingerX: 10.62, fingerY: 40.51 },
    { src: 'images/pic5.jpg', fingerX: 39.45, fingerY: 50.94 },
    { src: 'images/pic6.jpg', fingerX: 58.76, fingerY: 44.10 },
    { src: 'images/pic7.jpg', fingerX: 9.77, fingerY: 8.72 },
    { src: 'images/pic8.jpg', fingerX: 58.59, fingerY: 30.60 },
    { src: 'images/pic9.jpg', fingerX: 43.28, fingerY: 74.36 },
    { src: 'images/pic10.jpg', fingerX: 74.38, fingerY: 73.33 },
    { src: 'images/pic11.jpg', fingerX: 46.31, fingerY: 54.21 },
    { src: 'images/pic12.jpg', fingerX: 26.02, fingerY: 77.44 },
    { src: 'images/pic13.jpg', fingerX: 56.53, fingerY: 10.10 },
    { src: 'images/pic14.jpg', fingerX: 56.60, fingerY: 66.33 },
    { src: 'images/pic15.jpg', fingerX: 34.36, fingerY: 48.82 }
    // 可以在這裡添加更多圖片資料
];

// 取得指向圖片的HTML元素
const pointerImage = document.getElementById('pointer-image');

// 監聽滑鼠點擊事件
document.addEventListener('click', (event) => {
    // 取得滑鼠的點擊位置
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 記錄距離滑鼠位置最近的圖片
    let closestImage = null;
    let closestDistance = Infinity;

    // 遍歷每張圖片，計算滑鼠位置與每張圖片手指位置的距離
    images.forEach(image => {
        // 計算圖片手指在螢幕中的絕對位置
        const fingerPosX = window.innerWidth * (image.fingerX / 100);
        const fingerPosY = window.innerHeight * (image.fingerY / 100);

        // 計算滑鼠位置與手指位置之間的距離
        const distance = Math.sqrt(Math.pow(fingerPosX - mouseX, 2) + Math.pow(fingerPosY - mouseY, 2));

        // 更新最近的圖片
        if (distance < closestDistance) {
            closestDistance = distance;
            closestImage = image;
        }
    });

    // 更新圖片的來源，顯示圖片
    pointerImage.src = closestImage.src;
    pointerImage.style.display = 'block';

});
