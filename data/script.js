// 定義圖片路徑陣列
const images = [];

for (let i = 1; i <= 65; i++) {
    images.push(`images/pic${i}.jpg`);
}

console.log(images);


let currentImageIndex = 0;  // 當前顯示的圖片索引

// 取得圖片元素
const pointerImage = document.getElementById('pointer-image');

// 定義變數儲存圖片尺寸
let imgWidth;
let imgHeight;

// 顯示第一張圖片
pointerImage.src = images[currentImageIndex];

// 監聽圖片加載完成事件，以便正確取得圖片大小
pointerImage.onload = function() {
    // 更新圖片尺寸
    imgWidth = pointerImage.width;
    imgHeight = pointerImage.height;
};

// 只添加一次點擊事件監聽器
document.addEventListener('click', handleImageClick);

function handleImageClick(event) {
    // 確保圖片尺寸已經載入
    if (!imgWidth || !imgHeight) return;

    // 取得滑鼠的點擊位置
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 將滑鼠點擊的座標轉換為圖片的相對百分比
    const fingerX = (mouseX / imgWidth) * 100;
    const fingerY = (mouseY / imgHeight) * 100;

    // 取得當前顯示的圖片
    const currentImage = images[currentImageIndex];

    // 顯示點擊位置的資訊，使用百分比座標
    console.log(`{ src: '${currentImage}', fingerX: ${fingerX.toFixed(2)}, fingerY: ${fingerY.toFixed(2)} }`);

    // 更新圖片索引，顯示下一張圖片
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // 更新圖片的 src 屬性，顯示下一張圖片
    pointerImage.src = images[currentImageIndex];
}