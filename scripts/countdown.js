const glitchSound = new Audio('./audio/glitch.mp3');
glitchSound.preload = 'auto';

const beepSound = new Audio('./audio/countdown.mp3');   // your countdown beep
beepSound.preload = 'auto';

setTimeout(() => {
    glitchImage();
}, 10800);

function glitchImage() {
    const image = document.querySelector('.image');
    let flickers = 0;

    glitchSound.currentTime = 0;
    glitchSound.play().catch(() => {});

    const burst = setInterval(() => {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 10;
        const colors = ['hue-rotate(180deg)', 'invert(1)', 'saturate(10)', 'hue-rotate(90deg) saturate(5)', 'none'];
        
        image.style.transform = `translate(${x}px, ${y}px)`;
        image.style.filter = colors[Math.floor(Math.random() * colors.length)];

        flickers++;
        if (flickers > 15) {
            clearInterval(burst);
            image.style.transform = 'translate(0)';
            image.style.filter = 'none';
            glitchSound.pause();
            glitchSound.currentTime = 0;
            startBlackScreen();
        }
    }, 80);
}

function startBlackScreen() {
    const overlay = document.getElementById('glitch_overlay');
    const countdown = document.getElementById('countdown');

    overlay.style.display = 'block';
    countdown.style.display = 'block';

    let count = 5;
    countdown.textContent = count;

    // beep on the first number
    beepSound.currentTime = 0;
    beepSound.play().catch(() => {});

    const timer = setInterval(() => {
        count--;

        if (count > 0) {
            // beep on each number
            beepSound.currentTime = 0;
            beepSound.play().catch(() => {});

            glitchCountdown(countdown, count);
            setTimeout(() => {
                countdown.textContent = count;
            }, 200);
        } else {
            clearInterval(timer);
            window.location.href = './bdaycard.html';
        }

    }, 1000);
}

function glitchCountdown(countdown, currentNumber) {
    let flickers = 0;
    const burst = setInterval(() => {
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 15;
        countdown.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        const shadows = [
            '-6px 0 red, 6px 0 cyan',
            '6px 0 red, -6px 0 cyan',
            '-3px 0 magenta, 3px 0 lime',
            '0 0 white'
        ];
        countdown.style.textShadow = shadows[Math.floor(Math.random() * shadows.length)];

        countdown.style.visibility = flickers % 2 === 0 ? 'hidden' : 'visible';

        flickers++;
        if (flickers > 8) {
            clearInterval(burst);
            countdown.style.visibility = 'visible';
            countdown.style.transform = 'translate(-50%, -50%)';
            countdown.style.textShadow = '-4px 0 red, 4px 0 cyan';
            countdown.textContent = currentNumber;
        }
    }, 50);
}