function inserirImagem() {
    /*window.location.hash.substring(1); ------identifica o hash da página*/
    const imageStorie = document.getElementById("fotos");
    let hashPage = window.location.hash.substring(1);
    let storieFoto = new Map();
    // Adicionar os demais hashs
    storieFoto.set('2',[
        '../img/posts/Aki/aki.jpg',
        '../img/posts/Aki/aki.jpg',
        '../img/posts/Aki/aki.jpg',
        '../img/posts/Aki/aki.jpg',
        
    ])
    storieFoto.set('3',[
    '../img/posts/himeno/himeno-aquarela.jpg',
    '../img/posts/himeno/himeno-aquarela.jpg',
    '../img/posts/himeno/himeno-aquarela.jpg',
    '../img/posts/himeno/himeno-aquarela.jpg',
    
    ])
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
