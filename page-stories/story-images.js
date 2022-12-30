function inserirImagem() {
    /*window.location.hash.substring(1); ------identifica o hash da página*/
    const imageStorie = document.getElementById("fotos");
    let hashPage = window.location.hash.substring(1);
    let storieFoto = new Map();
    // Adicionar os demais hashs
    storieFoto.set('1',[
    '../img/stories/aki-sem-queixo.jpg',
    '../img/stories/makima-desenhada-torta.jpg',
    '../img/stories/zoeira-power.jpg',
    '../img/stories/denji-pochita.png',
    '../img/posts/denji/denji-pose.jpg'
    ])
    storieFoto.set('2',[
    '../img/posts/makima/makima-poste-de-energia.png',
    '../img/posts/makima/makima-paisagem.jpg',
    '../img/posts/makima/makima-estilosa.jpg',
    '../img/posts/makima/makima-escadaria.jpg',
    
    ])
    storieFoto.set('3',[
    '../img/stories/power-gato-fogo.jpg',
    '../img/posts/power/power-banheira.png',
    '../img/posts/power/power-dirigindo.jpg',
    '../img/posts/power/power-gato-colo.jpg',
    ])
    storieFoto.set('4',[
    '../img/posts/Aki/aki-alta-definicao.jpg',
    '../img/posts/Aki/Aki-raposa-fundo.jpg',
    '../img/posts/Aki/aki.jpg',    
    ])
    storieFoto.set('5',[
    '../img/posts/anjo/Anjo-comendo.jpg',
    '../img/posts/anjo/anjo-pose.jpg',
    ])
    storieFoto.set('6',[
    '../img/posts/tubarao/denji-beam.jpg',
    '../img/posts/tubarao/denji-emcima-do-tubarao.png',
    ])
    storieFoto.set('7',[
    '../img/posts/pochita/cosplay-pochita.jpg',
    '../img/posts/pochita/pochita-capivara.jpg',
    '../img/posts/pochita/pochita-pao.jpg',
    ])
    storieFoto.set('8',[
    '../img/posts/himeno/himeno-aquarela.jpg',
    '../img/posts/himeno/himeno-realista.jpg',
    '../img/posts/himeno/himeno-fumando.jpg',
    '../img/posts/himeno/himeno-sorrindo.jpg',
    ])
    storieFoto.set('9',[
    '../img/posts/reze/reze-agua.jpg',
    '../img/posts/reze/reze-praia.jpg',
    '../img/posts/reze/reze-psy.jpg',
    '../img/posts/reze/reze-realista.jpg',
    ])
    storieFoto.set('10',[
    '../img/posts/mitaka/mitaka-face.jpg',
    '../img/posts/mitaka/mitaka-yellow.jpg',
    '../img/posts/mitaka/mitaka-odio.jpg',
    '../img/posts/mitaka/mitaka-olhar.jpg',

    ]);

    if (storieFoto.has(hashPage)){
        let allImages = ``;
        let fotos = storieFoto.get(hashPage);
        for (let i = 0; i < fotos.length; i++) {
            allImages += `
            <img src="${fotos[i]}">
            
            `
        }
        imageStorie.innerHTML += allImages;
    }
}

inserirImagem ();
