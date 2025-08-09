
const numElement = document.querySelector('.num');

function updateRandomNumber() {
    const randomNum = (Math.random() * 100).toFixed(2);
    numElement.textContent = randomNum;
}

updateRandomNumber();

setInterval(updateRandomNumber, 1000); // 1000毫秒 = 1秒

function updateBeijingTime() {
    const now = new Date();

    // 强制设置为 UTC+8（北京时间）
    const beijingTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (8 * 3600 * 1000));

    // 格式化时间（HH:MM）
    const hours = String(beijingTime.getHours()).padStart(2, '0');
    const minutes = String(beijingTime.getMinutes()).padStart(2, '0');

    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// 立即更新一次
updateBeijingTime();

// 每秒更新一次
setInterval(updateBeijingTime, 1000);