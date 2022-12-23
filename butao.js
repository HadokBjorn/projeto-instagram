const prev = document.getElementById('prev');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains('b1');
        prev.style.display = "block";
        
                if (isLeft) {
                        document.querySelector('.story').scrollBy(-100,0);
                } else {
                        document.querySelector('.story').scrollBy(100,0);
                };
});
});