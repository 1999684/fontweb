document.addEventListener('DOMContentLoaded', function () {
    const gameElements = document.querySelectorAll('.game');

    gameElements.forEach((game, index) => {
        // 获取游戏图片路径中的编号
        const imgElement = game.querySelector('.game-img img');
        if (!imgElement) return;

        const imgSrc = imgElement.getAttribute('src');
        const match = imgSrc.match(/\/a(\d+)\//);

        if (match && match[1]) {
            const gameNumber = match[1];
            const detailPageUrl = `atelier/a${gameNumber}.html`;

            // 添加点击事件
            game.addEventListener('click', function () {
                window.location.href = detailPageUrl;
            });

            game.style.cursor = 'pointer';

            // 添加悬停效果
            game.addEventListener('mouseenter', function () {
                this.style.boxShadow = '0 0 10px rgba(228, 220, 207, 0.5)';
            });

            game.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        }
    });
});