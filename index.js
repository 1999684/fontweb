document.addEventListener('DOMContentLoaded', function () {
    const webDivs = document.querySelectorAll('.web');
    webDivs.forEach(div => {
        // 找到同级的<a>标签
        const link = div.nextElementSibling;
        if (link && link.tagName === 'A') {
            // 添加点击事件
            div.addEventListener('click', () => {
                window.open(link.href, '_blank');
            });
            // 添加指针样式
            div.style.cursor = 'pointer';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const webDivs = document.querySelectorAll('.app-main-web');
    webDivs.forEach(div => {
        const link = div.nextElementSibling;
        if (link && link.tagName === 'A') {
            div.addEventListener('click', () => {
                // 关键修改：在当前标签页跳转链接
                window.location.href = link.href;
            });
            div.style.cursor = 'pointer';
        }
    });
});