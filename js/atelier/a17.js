document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.left-btn');
    const showContainer = document.querySelector('.show');
    const backToTopButton = document.getElementById('backToTop');
    const characterContent = document.querySelector('.character-content');

    // 预定义不同内容
    const contents = {
        '首页': `<!-- 首页内容 -->
                <div class="home-content">
                    <div class="home-content-top flex-space-between-h flex-center-s">
                        <div class="home-logo">
                        </div>
                    </div>
                </div>
                `,
        '角色': `
                <div class="character-content">
                                
                </div>
                `,
        '素材': `
                `,
        '事件': `
                `,
        '其他': `
                `
    };

    // 添加点击事件
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 移除所有按钮的active类
            buttons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');

            // 获取按钮文本内容
            const buttonText = this.textContent.trim();

            // 显示对应内容
            showContainer.innerHTML = contents[buttonText];
        });
    });

    // 返回顶部按钮功能
    if (backToTopButton && characterContent) {
        // 监听滚动事件
        characterContent.addEventListener('scroll', function () {
            // 当滚动位置大于100px时显示按钮，否则隐藏
            if (this.scrollTop > 100) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // 点击返回顶部
        backToTopButton.addEventListener('click', function () {
            // 平滑滚动到顶部
            const charaTop = document.getElementById('chara_top');
            if (charaTop) {
                charaTop.scrollIntoView({ behavior: 'smooth' });
            } else {
                characterContent.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
});