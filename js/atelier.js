document.addEventListener('DOMContentLoaded', function () {
    const gameElements = document.querySelectorAll('.game');

    gameElements.forEach((game, index) => {
        // 获取游戏图片路径
        const imgElement = game.querySelector('.game-img img');
        if (!imgElement) return;

        const imgSrc = imgElement.getAttribute('src');
        
        let gameNumber = null;
        
        // 匹配正作部分 /a\d+/
        const matchNormal = imgSrc.match(/\/a(\d+)\//);
        if (matchNormal && matchNormal[1]) {
            gameNumber = 'a' + matchNormal[1];
        } else {
            // 匹配萨尔布鲁克系列外传 /sa\d+/
            const matchSa = imgSrc.match(/\/sa(\d+)\//);
            if (matchSa && matchSa[1]) {
                gameNumber = 'sa' + matchSa[1];
            } else {
                // 匹配DS三部曲外传 /dsa\d+/
                const matchDsa = imgSrc.match(/\/dsa(\d+)\//);
                if (matchDsa && matchDsa[1]) {
                    gameNumber = 'dsa' + matchDsa[1];
                } else {
                    // 匹配其他外传 /SD-[^/]+/
                    const matchSd = imgSrc.match(/\/(SD-[^/]+)\//);
                    if (matchSd && matchSd[1]) {
                        gameNumber = matchSd[1];
                    }
                }
            }
        }
        
        // 如果找到了游戏编号，添加点击事件
        if (gameNumber) {
            const detailPageUrl = `atelier/${gameNumber}.html`;
            
            game.addEventListener('click', function () {
                window.location.href = detailPageUrl;
            });
            
            game.style.cursor = 'pointer';
            
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