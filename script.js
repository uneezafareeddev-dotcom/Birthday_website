// Page Fade In
window.onload = function () {
    document.body.style.opacity = "1";
};

// Welcome Button
function startSurprise() {
    document.querySelector(".welcome").classList.add("fade-out");
    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
}

// Login Validation
function checkDates() {
    const nikah = document.getElementById("nikah").value;
    const wedding = document.getElementById("wedding").value;
    const valima = document.getElementById("valima").value;
    const message = document.getElementById("message");

    const nikahDate = "2019-12-20";
    const weddingDate = "2019-12-26";
    const valimaDate = "2019-12-28";

    if (nikah === nikahDate && wedding === weddingDate && valima === valimaDate) {
        message.style.color = "#ffd700";
        message.innerHTML = "❤️ Verification Successful ❤️";
        setTimeout(function () { document.body.style.opacity = "0"; }, 1000);
        setTimeout(function () { window.location.href = "curtain.html"; }, 1800);
    } else {
        message.style.color = "#ff0000";
        message.innerHTML = "❌ Wrong Dates! Please Try Again ❤️";
        shakeBox();
    }
}

function shakeBox() {
    const box = document.querySelector(".login-box");
    if (!box) return;
    box.classList.add("shake");
    setTimeout(function () { box.classList.remove("shake"); }, 600);
}

// Curtain Page
if (document.querySelector(".left-curtain")) {
    setTimeout(function () {
        document.querySelector(".left-curtain").classList.add("open-left");
        document.querySelector(".right-curtain").classList.add("open-right");
    }, 2000);
    setTimeout(function () {
        document.querySelector(".birthday-message").style.opacity = "1";
    }, 4500);
}

const nextCurtain = document.getElementById("openMessage");
if (nextCurtain) {
    nextCurtain.onclick = function () { window.location = "birthday.html"; };
}

// Typing Effect (Birthday Page)
const typing = document.getElementById("typing");
if (typing) {
    const text = "Happy Birthday My Dear Husband Mr. Fareed Ahmed ❤️\n\nYou are my best friend, my soulmate, my happiness and my greatest blessing.\n\nMay Allah bless you with endless happiness, good health and success.\n\nI Love You Forever ❤️";
    let i = 0;
    function type() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Gallery Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.gallery-dots');

if (slides.length > 0 && dotsContainer) {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = function () { goToSlide(i); };
        dotsContainer.appendChild(dot);
    }
    showSlidesAuto();
}

function showSlidesAuto() {
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = 'none'; }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach(d => d.classList.remove('active'));
    if(dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
    
    setTimeout(showSlidesAuto, 3000);
}

function moveSlide(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    if (slideIndex >= slides.length) { slideIndex = 0; }
    showSlidesAuto();
}

function goToSlide(n) {
    slideIndex = n - 1;
    showSlidesAuto();
}

// Love Letter
const openBtn = document.getElementById("openLetter");
if (openBtn) {
    openBtn.onclick = function () {
        document.querySelector(".envelope-box").style.display = "none";
        document.getElementById("letter").style.display = "block";
        typeLetter();
    };
}

function typeLetter() {
    const text = `My Dearest Husband Mr. Fareed Ahmed ❤️,\n\nHappy Birthday to the most wonderful person in my life.\n\nYou are not only my husband, but also my best friend, my strength, and the biggest blessing Allah has given me.\n\nEvery smile of yours brings peace to my heart.\nEvery prayer I make includes your happiness, health, and success.\n\nThank you for loving me, supporting me, and always standing beside me.\n\nI pray that Allah blesses us with a lifetime of love, peace, and togetherness.\n\nYou are my today, my tomorrow, and my forever.\n\n❤️ Happy Birthday My Love ❤️\n\nForever Yours,\n❤️ Uneeza Fareed ❤️`;
    
    let i = 0;
    const target = document.getElementById("letterText");
    target.innerHTML = "";

    function runTyping() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            setTimeout(runTyping, 35);
        }
    }
    runTyping();
}

// Cake Page
const blowBtn = document.getElementById("blowBtn");
if (blowBtn) {
    blowBtn.onclick = function () {
        document.querySelectorAll(".flame").forEach(f => f.style.display = "none");
        document.getElementById("wishMessage").innerHTML = "🎉 Yayyy...<br><br>Happy Birthday My Dear Husband Mr. Fareed Ahmed ❤️<br><br>May Allah bless you with happiness, success, health and a long beautiful life. Ameen 🤲❤️";
        document.getElementById("giftBtn").style.display = "inline-block";
    };
}

const giftBtnCake = document.getElementById("giftBtn");
if (giftBtnCake) {
    giftBtnCake.onclick = function () { window.location = "gift.html"; };
}

// Gift Page
const openGift = document.getElementById("openGiftBtn");
if (openGift) {
    openGift.onclick = function () {
        document.querySelector(".gift-container").style.display = "none";
        document.querySelector(".gift-title").style.display = "none";
        document.getElementById("finalSurprise").style.display = "block";
        heartRain();
    };
}

function heartRain() {
    const container = document.querySelector(".hearts-container");
    if (!container) return;
    setInterval(function () {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animation = "fallHeart " + (4 + Math.random() * 4) + "s linear forwards";
        container.appendChild(heart);
        setTimeout(function () { heart.remove(); }, 8000);
    }, 300);
}

// Floating Hearts for all pages
function createHearts() {
    const container = document.querySelector(".floating-hearts");
    if (!container) return;
    setInterval(function () {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-50px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.color = "#800000";
        heart.style.opacity = "0.8";
        heart.style.zIndex = "1";
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatHeart " + (6 + Math.random() * 4) + "s linear forwards";
        container.appendChild(heart);
        setTimeout(function () { heart.remove(); }, 10000);
    }, 400);
}
createHearts();