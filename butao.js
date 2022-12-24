const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const firstCard = document.getElementById("firs-card");
const coments = document.querySelectorAll(".coments");

let cont = 0;
function esquerda(){
        document.querySelector('.story').scrollBy(-100,0);
        console.log(firstCard.offsetLeft);
        cont--;
        if(cont<=0){
                btnPrev.style.display = "none";
                btnNext.style.display = "block";
        }
}

function direita(){
        btnPrev.style.display = "block";
        document.querySelector('.story').scrollBy(100,0);
        cont++;
        if(cont>=3){
                btnNext.style.display = "none";
        }
}

function comentar(){
        coments.forEach((coment) => {
                coment.style.display = "block";
        })

}