document.addEventListener('DOMContentLoaded', function () {
    // 加载网站数据
    loadWebsites();
    
    // 实现水平滑动功能
    setupHorizontalScroll();
});

// 从JSON文件加载网站数据
async function loadWebsites() {
    try {
        const response = await fetch('data/websites.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const websites = await response.json();
        renderWebsites(websites);
    } catch (error) {
        console.error('加载网站数据失败:', error);
        // 如果加载失败，使用默认数据
        const defaultWebsites = [
            {
                id: 1,
                name: "我的博客",
                url: "https://ztgdblog.icu/",
                image: "rs/img/web1.webp"
            },
            {
                id: 2,
                name: "游戏测评",
                url: "https://game.ztgdblog.icu/",
                image: "rs/img/web2.webp"
            }
        ];
        renderWebsites(defaultWebsites);
    }
}

// 渲染网站列表
function renderWebsites(websites) {
    const container = document.getElementById('websiteContainer');
    container.innerHTML = '';
    
    websites.forEach(site => {
        const websiteElement = document.createElement('div');
        websiteElement.className = 'flex-space-between-s app-each';
        
        const webDiv = document.createElement('div');
        webDiv.className = 'web';
        webDiv.style.backgroundImage = `url('${site.image}')`;
        
        const link = document.createElement('a');
        link.href = site.url;
        link.target = '_blank';
        link.textContent = site.name;
        
        // 添加点击事件
        webDiv.addEventListener('click', () => {
            window.open(site.url, '_blank');
        });
        webDiv.style.cursor = 'pointer';
        
        websiteElement.appendChild(webDiv);
        websiteElement.appendChild(link);
        container.appendChild(websiteElement);
    });
}

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
// 初始化侧边栏为隐藏
sidebar.classList.add("hidden");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});

// 点击侧边栏以外区域隐藏侧边栏
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.add("hidden");
    }
});

// 设置水平滑动功能
function setupHorizontalScroll() {
    const container = document.getElementById('websiteContainer');
    let isDown = false;
    let startX;
    let scrollLeft;

    // 鼠标按下事件
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('grabbing');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        e.preventDefault(); // 防止拖动时选中文本
    });

    // 鼠标离开事件
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('grabbing');
    });

    // 鼠标抬起事件
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('grabbing');
    });

    // 鼠标移动事件
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // 滚动速度
        container.scrollLeft = scrollLeft - walk;
    });

    // 触摸事件支持
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    }, { passive: false });

    container.addEventListener('touchend', () => {
        isDown = false;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
        e.preventDefault(); // 防止页面滚动
    }, { passive: false });
}
