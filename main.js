function linkStorie () {

    const storieBox = document.querySelector('.story');

    const perfilStorie = [
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
        img:"./img/perfis/makima-perfil.png",
        nome:"Makima",},
        {
            img:"./img/posts/power/power-banheira.png",
            nome:"Power",
        },
        {
            img:"./img/posts/Aki/aki-espada.png",
            nome:"Aki",
        },
        {
            img:"./img/posts/anjo/anjo-horizonte.png",
            nome:"Angel",
        },
        {
            img:"./img/posts/tubarao/tubarao-post.jpg",
            nome:"Beam",
        },
        {
            img:"./img/posts/pochita/pochita-capivara.jpg",
            nome:"Pochita",
        },
        {
            img:"./img/posts/himeno/himeno-sorrindo.jpg",
            nome:"Himeno",
        },
        {
            img:"./img/posts/reze/reze-perfil.png",
            nome:"Reze",
        },
        {
            img:"./img/posts/mitaka/mitaka-perfil.png",
            nome:"Mitaka",
        },
    ];

    let postItem = `
    <a href="./page-stories/index.html#${1}">
        <div class="card-story" id="firs-card">
            <img src="${perfilStorie[0].img}" />
            <p>${perfilStorie[0].nome}</p>
        </div>
    </a>
`;

    for (let i = 1; i < perfilStorie.length; i++) {
        postItem += `
        <a href="./page-stories/index.html#${i+1}">
            <div class="card-story">
                <img src="${perfilStorie[i].img}" />
                <p>${perfilStorie[i].nome}</p>
            </div>
        </a>
        `
    }
    storieBox.innerHTML += postItem;
}
linkStorie ();






function newPost(){

    const postBox = document.querySelector('.storie-feed');

    const posts = [
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima-terno.jpg",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:45
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima-dogs.jpg",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:450
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima-conceitual.jpg",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil"
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima.gif",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil"
        },
    ];
    
    let postItem = ``;

    for (let i = 0; i < posts.length; i++) {

        postItem += `
            <section class="post-container">
                <header class="top-post">
                    <div class="card-perfil">
                        <img src="${posts[i].perfi}" />
                        <p>${posts[i].nome}</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </header>
                <figure class="img-post">
                    <img src="${posts[i].post}" />
                </figure>
                <article class="bottom-post">
                    <header class="interaction">
                        <div class="like-post">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline" onclick="comentar()" id="icon-coment${[i]}"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </header>
                    <article class="like-info">
                        <img src="${posts[i].perfiCurtidor}" />
                        <p>curtido por <b>${posts[i].seguidor}</b> e <b>outras ${posts[i].curtidas} pessoas</b></p>
                    </article>
                </article>
                <footer id="rodape-post">
                    <main class="coments" id="div-coment${[i]}">
                        <div class="like-info">
                            <img src="${posts[i].perfi}" />
                            <p>${posts[i].nome}</p>
                        </div>
                    </main>
                    <footer class="addComent">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input placeholder="Adicionar comentário...">
                        <button class="publicar">Publicar</button>
                    </footer>
                </footer>
            </section>
            `
    }
    postBox.innerHTML += postItem;

}
newPost();