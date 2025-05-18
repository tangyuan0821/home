document.addEventListener('DOMContentLoaded', () => {
    // 定义多语言的"你好"
    const greetings = [
        '你好', // 中文
        'Hello', // 英语
        'こんにちは', // 日语
        '안녕하세요', // 韩语
        'Bonjour', // 法语
        'Hola', // 西班牙语
        'Ciao', // 意大利语
        'Hallo', // 德语
        'Olá', // 葡萄牙语
        'Привет', // 俄语
        'नमस्ते', // 印地语
        'สวัสดี', // 泰语
        'Xin chào', // 越南语
        'Hej', // 瑞典语
        'Merhaba', // 土耳其语
        'Salam', // 阿拉伯语
        'Jambo', // 斯瓦希里语
        'Γεια σας', // 希腊语
        'שלום', // 希伯来语
        'Salut' // 罗马尼亚语
    ];

    // 定义颜色数组
    const colors = [
        '#FF5252', '#FF4081', '#E040FB', '#7C4DFF', 
        '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', 
        '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', 
        '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'
    ];

    const greetingDisplay = document.querySelector('.greeting-display');
    let currentIndex = 0;
    let isAnimating = false;

    // iPhone 激活动画效果
    function changeGreeting() {
        if (isAnimating) return;
        isAnimating = true;

        // 淡出当前问候语
        greetingDisplay.style.animation = 'fadeOut 0.8s forwards';
        
        setTimeout(() => {
            // 更新到下一个问候语
            currentIndex = (currentIndex + 1) % greetings.length;
            greetingDisplay.textContent = greetings[currentIndex];
            
            // 随机选择颜色
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            greetingDisplay.style.color = randomColor;
            
            // 淡入新问候语
            greetingDisplay.style.animation = 'fadeIn 0.8s forwards';
            
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }, 800);
    }

    // 启动动画循环
    setInterval(changeGreeting, 2500);

    // 背景文字随鼠标移动效果
    const backgroundText = document.querySelector('.background-text');
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        backgroundText.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
}); 