class StoriesSlider{
    constructor (id){
        this.slide = document.querySelector(`[data-slide = "${id}"]`)
        this.active = 0;
        this.init();
    }

    activeSlide(i){
        this.active = i;
        this.itens.forEach((item) => item.classList.remove('active'));
        this.itens[i].classList.add('active');
        this.barraItens.forEach((item) => item.classList.remove('active'));
        this.barraItens[i].classList.add('active');
        this.autoSlide();

    }

    prev() {
        if (this.active > 0){
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.itens.length - 1);
        }
    }

    next() {
        if (this.active < this.itens.length - 1){
            this.activeSlide(this.active + 1);
        }else{
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const nextbtn = this.slide.querySelector('.slide-next');
        const prevbtn = this.slide.querySelector('.slide-prev');
        nextbtn.addEventListener('click', this.next);
        prevbtn.addEventListener('click', this.prev);
    }

    addBarraItens(){
        this.itens.forEach(() => (this.barra.innerHTML += `<span></span>`));
        this.barraItens = Array.from(this.barra.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.itens = this.slide.querySelectorAll('.slide-itens > *');
        this.barra = this.slide.querySelector('.barra-slide')
        this.addBarraItens();
        this.activeSlide(0);
        this.addNavigation();
    }
}
new StoriesSlider('slide');