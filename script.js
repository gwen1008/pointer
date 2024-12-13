// 定義圖片資料陣列，每個項目包含圖片的路徑和手指位置的相對座標（百分比）
const images = [
    { src: 'images/pic1.jpg', fingerX: 36.79, fingerY: 29.63 },
    { src: 'images/pic2.jpg', fingerX: 41.35, fingerY: 20.20 },
    { src: 'images/pic3.jpg', fingerX: 54.72, fingerY: 90.40 },
    { src: 'images/pic4.jpg', fingerX: 10.77, fingerY: 82.49 },
    { src: 'images/pic5.jpg', fingerX: 14.94, fingerY: 37.37 },
    { src: 'images/pic6.jpg', fingerX: 59.28, fingerY: 45.45 },
    { src: 'images/pic7.jpg', fingerX: 74.69, fingerY: 69.87 },
    { src: 'images/pic8.jpg', fingerX: 56.45, fingerY: 32.83 },
    { src: 'images/pic9.jpg', fingerX: 42.61, fingerY: 73.40 },
    { src: 'images/pic10.jpg', fingerX: 62.50, fingerY: 1.68 },
    { src: 'images/pic11.jpg', fingerX: 31.60, fingerY: 1.52 },
    { src: 'images/pic12.jpg', fingerX: 57.86, fingerY: 22.22 },
    { src: 'images/pic13.jpg', fingerX: 69.18, fingerY: 28.62 },
    { src: 'images/pic14.jpg', fingerX: 52.28, fingerY: 77.44 },
    { src: 'images/pic15.jpg', fingerX: 71.54, fingerY: 49.49 },
    { src: 'images/pic16.jpg', fingerX: 39.62, fingerY: 8.25 },
    { src: 'images/pic17.jpg', fingerX: 66.67, fingerY: 15.82 },
    { src: 'images/pic18.jpg', fingerX: 91.82, fingerY: 47.64 },
    { src: 'images/pic19.jpg', fingerX: 59.28, fingerY: 40.07 },
    { src: 'images/pic20.jpg', fingerX: 34.04, fingerY: 6.40 },
    { src: 'images/pic21.jpg', fingerX: 44.81, fingerY: 1.52 },
    { src: 'images/pic22.jpg', fingerX: 71.07, fingerY: 54.71 },
    { src: 'images/pic23.jpg', fingerX: 51.89, fingerY: 62.46 },
    { src: 'images/pic24.jpg', fingerX: 36.40, fingerY: 93.27 },
    { src: 'images/pic25.jpg', fingerX: 39.62, fingerY: 39.06 },
    { src: 'images/pic26.jpg', fingerX: 84.59, fingerY: 19.02 },
    { src: 'images/pic27.jpg', fingerX: 43.63, fingerY: 32.15 },
    { src: 'images/pic28.jpg', fingerX: 14.62, fingerY: 54.55 },
    { src: 'images/pic29.jpg', fingerX: 29.95, fingerY: 18.01 },
    { src: 'images/pic30.jpg', fingerX: 11.32, fingerY: 7.07 },
    { src: 'images/pic31.jpg', fingerX: 46.07, fingerY: 10.77 },
    { src: 'images/pic32.jpg', fingerX: 78.62, fingerY: 94.95 },
    { src: 'images/pic33.jpg', fingerX: 55.90, fingerY: 64.14 },
    { src: 'images/pic34.jpg', fingerX: 37.11, fingerY: 85.69 },
    { src: 'images/pic35.jpg', fingerX: 31.92, fingerY: 12.29 },
    { src: 'images/pic36.jpg', fingerX: 55.74, fingerY: 33.00 },
    { src: 'images/pic37.jpg', fingerX: 58.81, fingerY: 39.73 },
    { src: 'images/pic38.jpg', fingerX: 21.70, fingerY: 51.18 },
    { src: 'images/pic39.jpg', fingerX: 36.32, fingerY: 84.01 },
    { src: 'images/pic40.jpg', fingerX: 70.28, fingerY: 70.37 },
    { src: 'images/pic41.jpg', fingerX: 88.05, fingerY: 45.62 },
    { src: 'images/pic42.jpg', fingerX: 28.46, fingerY: 30.13 },
    { src: 'images/pic43.jpg', fingerX: 46.23, fingerY: 49.83 },
    { src: 'images/pic44.jpg', fingerX: 43.40, fingerY: 4.71 },
    { src: 'images/pic45.jpg', fingerX: 53.77, fingerY: 2.02 },
    { src: 'images/pic46.jpg', fingerX: 44.03, fingerY: 36.20 },
    { src: 'images/pic47.jpg', fingerX: 26.73, fingerY: 84.68 },
    { src: 'images/pic48.jpg', fingerX: 45.20, fingerY: 72.73 },
    { src: 'images/pic49.jpg', fingerX: 34.28, fingerY: 44.11 },
    { src: 'images/pic50.jpg', fingerX: 51.89, fingerY: 37.54 },
    { src: 'images/pic51.jpg', fingerX: 48.58, fingerY: 59.26 },
    { src: 'images/pic52.jpg', fingerX: 50.00, fingerY: 61.95 },
    { src: 'images/pic53.jpg', fingerX: 59.12, fingerY: 1.35 },
    { src: 'images/pic54.jpg', fingerX: 88.05, fingerY: 21.21 },
    { src: 'images/pic55.jpg', fingerX: 5.82, fingerY: 24.75 },
    { src: 'images/pic56.jpg', fingerX: 40.41, fingerY: 50.51 },
    { src: 'images/pic57.jpg', fingerX: 11.95, fingerY: 11.11 },
    { src: 'images/pic58.jpg', fingerX: 43.71, fingerY: 62.46 },
    { src: 'images/pic59.jpg', fingerX: 31.29, fingerY: 83.84 },
    { src: 'images/pic60.jpg', fingerX: 39.78, fingerY: 94.61 },
    { src: 'images/pic61.jpg', fingerX: 52.75, fingerY: 77.10 },
    { src: 'images/pic62.jpg', fingerX: 22.64, fingerY: 61.62 },
    { src: 'images/pic63.jpg', fingerX: 36.08, fingerY: 98.15 },
    { src: 'images/pic64.jpg', fingerX: 37.19, fingerY: 47.98 },
    { src: 'images/pic65.jpg', fingerX: 16.59, fingerY: 77.44 }
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
