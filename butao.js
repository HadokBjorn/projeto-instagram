let clicou = true;
const btnPrev = document.getElementById("prev");
function esquerda(){
        clicou = false;
        if(clicou==false){
                document.querySelector('.story').scrollBy(-100,0);
        }
}

function direita(){
        clicou = true;
        btnPrev.style.display = "block";
        if(clicou){
        document.querySelector('.story').scrollBy(100,0);

        
        }
}