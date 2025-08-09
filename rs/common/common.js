// 侧边栏
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
// 初始化侧边栏为隐藏
sidebar.classList.add("hidden");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});

// 点击侧边栏以外的区域隐藏侧边栏
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.add("hidden");
    }
});

// 侧边栏点击
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('li.flex');
    listItems.forEach(li => {
        const link = li.querySelector('a.flex-center');
        if (link) {
            li.addEventListener('click', function (event) {
                if (!event.target.closest('a')) {
                    window.location.href = link.href;
                }
            });
            li.style.cursor = 'pointer';
        }
    });
});

// 头部内容
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