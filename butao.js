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
function mudaTema(){
        document.body.classList.toggle("dark");
}

function comentar(){
        for(let i=0; i<coments.length; i++){
                let idComent = document.getElementById(`icon-coment${[i]}`);
                idComent.addEventListener("click",(e) =>{
                if(coments[i].style.display=='block'){
                        
                        coments[i].style.display = "none";
                        return;
                }
                        coments[i].classList.add("open-coments");
                        coments[i].style.display = "block";
                });
        }
}
comentar();