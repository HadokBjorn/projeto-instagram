const btnPrev = document.getElementById("prev");
const firstCard = document.getElementById("firs-card");

function esquerda(){
        document.querySelector('.story').scrollBy(-100,0);
        console.log(firstCard.offsetLeft);
}

function direita(){
        btnPrev.style.display = "block";
        document.querySelector('.story').scrollBy(100,0);
}