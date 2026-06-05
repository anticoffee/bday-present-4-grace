const yesClickSound = new Audio('./audio/yes.mp3');
yesClickSound.preload = 'auto'; 

function yes(){
    yesClickSound.currentTime = 0;
    yesClickSound.play();
    setTimeout(() => {
        window.location.href = "countdown.html";
    }, 200);
}

const noClickSound = new Audio('./audio/minecraft.mp3');
noClickSound.preload = 'auto'; 

function no(){
    noClickSound.currentTime = 0;
    noClickSound.play();
    alert("stop being a bitch grace and take the gift ୧(๑•̀ᗝ•́)૭");
}

// runaway 'no' button
const noBtn = document.getElementById('no');
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distX = e.clientX - btnCenterX;
    const distY = e.clientY - btnCenterY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 120) {
        const angle = Math.atan2(distY, distX);

        const newX = currentX - Math.cos(angle) * 100;
        const newY = currentY - Math.sin(angle) * 100;

        // strict boundaries using window size
        const minX = -(btnRect.left - 50);                         // 20px padding from left
        const maxX = window.innerWidth - btnRect.right - 50;       // 20px padding from right
        const minY = -(btnRect.top - 50);                          // 20px padding from top
        const maxY = window.innerHeight - btnRect.bottom - 50;     // 20px padding from bottom

        currentX = Math.min(Math.max(newX, minX), maxX);
        currentY = Math.min(Math.max(newY, minY), maxY);

        noBtn.style.transition = 'transform 0.3s ease';
        noBtn.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
});

