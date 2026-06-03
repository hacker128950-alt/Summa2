/* ==========================
   OPEN INVITATION
========================== */

function openInvitation(){

    const hero =
    document.getElementById(
    "heroScreen"
    );

    const invitation =
    document.getElementById(
    "invitationContent"
    );

    hero.style.transition =
    "all 1.2s ease";

    hero.style.opacity =
    "0";

    hero.style.transform =
    "scale(1.15)";

    hero.style.filter =
    "blur(20px)";

    setTimeout(()=>{

        hero.style.display =
        "none";

        invitation.style.display =
        "block";

        invitation.style.opacity =
        "0";

        invitation.style.transform =
        "translateY(80px)";

        setTimeout(()=>{

            invitation.style.transition =
            "all 1.5s ease";

            invitation.style.opacity =
            "1";

            invitation.style.transform =
            "translateY(0)";

        },100);

    },1200);

    const music =
    document.getElementById(
    "bgMusic"
    );

    if(music){

        music.volume = 0.4;

        music.play()
        .catch(()=>{});
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

/* ==========================
   COUNTDOWN
========================== */

const weddingDate =
new Date(
"June 17, 2026 09:00:00"
).getTime();

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    weddingDate - now;

    const days =
    Math.floor(
    distance /
    (1000*60*60*24)
    );

    const hours =
    Math.floor(
    (distance %
    (1000*60*60*24))
    /
    (1000*60*60)
    );

    const minutes =
    Math.floor(
    (distance %
    (1000*60*60))
    /
    (1000*60)
    );

    const seconds =
    Math.floor(
    (distance %
    (1000*60))
    /
    1000
    );

    const d =
    document.getElementById("days");

    const h =
    document.getElementById("hours");

    const m =
    document.getElementById("minutes");

    const s =
    document.getElementById("seconds");

    if(d) d.innerHTML = days;
    if(h) h.innerHTML = hours;
    if(m) m.innerHTML = minutes;
    if(s) s.innerHTML = seconds;

}

setInterval(
updateCountdown,
1000
);

updateCountdown();

/* ==========================
   REVEAL ANIMATION
========================== */

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},{
threshold:.15
});

document
.querySelectorAll(
".glass-card,section,.time-box"
)
.forEach(el=>{

observer.observe(el);

});

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "🤍";

heart.style.position =
"fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom =
"-50px";

heart.style.fontSize =
(15 + Math.random()*20)
+ "px";

heart.style.opacity =
".5";

heart.style.pointerEvents =
"none";

heart.style.zIndex =
"999";

document.body.appendChild(
heart
);

let pos = -50;

const move =
setInterval(()=>{

pos += 2;

heart.style.bottom =
pos + "px";

heart.style.transform =
`translateX(
${Math.sin(pos/40)*30}px
)`;

if(pos >
window.innerHeight+100){

clearInterval(move);

heart.remove();

}

},30);

}

setInterval(
createHeart,
2500
);

/* ==========================
   PARALLAX LIGHT EFFECT
========================== */

window.addEventListener(
"scroll",
()=>{

const scroll =
window.pageYOffset;

document.body.style.backgroundPositionY =
scroll * .2 + "px";

});



/* ==========================
   DYNAMIC TITLE
========================== */

const titles = [

"Balasubramanian ❤️ Sivasangari",

"Wedding Invitation 💍",

"17 June 2026 ✨"

];

let index = 0;

setInterval(()=>{

document.title =
titles[index];

index++;

if(index >= titles.length){

index = 0;

}

},3000);

console.log(
"Luxury Wedding Invitation Loaded ❤️"
);
