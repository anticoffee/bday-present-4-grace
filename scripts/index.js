const yesClickSound = new Audio('./audio/yes.mp3');
yesClickSound.preload = 'auto'; 

function yes(){
    yesClickSound.currentTime = 0;
    yesClickSound.play();
    setTimeout(() => {
        window.location.href = "offer.html";
    }, 200);
}

const noClickSound = new Audio('./audio/minecraft.mp3');
noClickSound.preload = 'auto'; 

function no(){
    noClickSound.currentTime = 0;
    noClickSound.play();
    alert("don't fucking lie Grace (｡•̀ ⤙ •́ ｡ꐦ) !!!");
}

// starts when clicked or detected mouse on screen
let started = false;

function startAnimations() {
    if (started) return;
    started = true;

    document.querySelector('.text1').classList.add('animate');
    document.querySelector('.text2').classList.add('animate');
    document.querySelector('.image').classList.add('animate');
    document.querySelector('.btn_parent_container').classList.add('animate');
}

document.addEventListener('mousemove', startAnimations, { once: true });
document.addEventListener('click', startAnimations, { once: true });