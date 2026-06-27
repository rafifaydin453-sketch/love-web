const btnNo = document.getElementById("btn-no");

function moveButton() {

    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;

    btnNo.style.position = "fixed";
    btnNo.style.left = Math.random() * maxX + "px";
    btnNo.style.top = Math.random() * maxY + "px";
}

// PC / Laptop
btnNo.addEventListener("mouseover", moveButton);

// HP
btnNo.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});
function showYesPage() {
    document.getElementById("page-main").classList.remove("active");
    document.getElementById("page-yes").classList.add("active");

}
function goBack(){

    document.getElementById("page-yes").classList.remove("active");
    document.getElementById("page-main").classList.add("active");
}

function createConfetti(){

    const wrap=document.getElementById("confetti-wrap");

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.innerHTML=Math.random()>0.5?"💖":"✨";

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.fontSize=(15+Math.random()*25)+"px";
        c.style.animation=`drop ${2+Math.random()*3}s linear forwards`;

        wrap.appendChild(c);

        setTimeout(()=>c.remove(),5000);
    }
}

const style=document.createElement("style");

style.innerHTML=`
@keyframes drop{
0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
