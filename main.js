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
        curtidas:45,
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima-dogs.jpg",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:450,
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima-conceitual.jpg",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil",
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        post:"./img/posts/makima/makima.gif",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil",
        },
        {
            perfi:"./img/perfis/makima-perfil.png",
            nome:"Makima",
            post:"./img/posts/power/power-denji-oculos.jpg",
            perfiCurtidor: "./img/stories/denji-pochita.png",
            seguidor:"Denji",
            curtidas:"33 mil",
            },
    ];

    const videosPost = [
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil",
        videoMp4:"./img/video.mp4",
        videoOgv:"./img/video.ogv",
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil",
        videoMp4:"https://img.ifunny.co/videos/1191493d057b07d85c9710529aff950fab284c566b1ff2b01d8642e830bfadc9_1.mp4",
        videoOgv:"./img/video.ogv",
        },
        {
        perfi:"./img/perfis/makima-perfil.png",
        nome:"Makima",
        perfiCurtidor: "./img/stories/denji-pochita.png",
        seguidor:"Denji",
        curtidas:"33 mil",
        videoMp4:"https://v16-webapp.tiktok.com/57e7230d11b00ee8659d5eb4f3d0ed41/63a9eefd/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e6e9a31190f1469bb48e8953ce1002a8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1256&bt=628&cs=0&ds=3&ft=4b~OyMXh8Zmo0W_ak64jVO2cDpWrKsdm&mime_type=video_mp4&qs=0&rc=ZjRnOWQ1N2QzO2RpNTVnZEBpanU7bzc6Zjd3ZzMzZjgzM0A2YS9hMi00Xi0xYC8yNDI1YSNhYG9ecjQwXzZgLS1kL2Nzcw%3D%3D&l=202212261258548213557D6D8FE20FEDA0&btag=80000.mp4",
        videoOgv:"./img/video.ogv",
        },
    ];
    
    let postItem = ``;
    let quantidadeImage = 0;

    for (let i = 0; i < posts.length; i++) {
        quantidadeImage = i;
        postItem += `
            <section class="post-container" id="${[i]}">
                <header class="top-post">
                    <div class="card-perfil">
                        <img src="${posts[i].perfi}" />
                        <p>${posts[i].nome}</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </header>
                <div class="img-post">
                    <img src="${posts[i].post}" />
                </div>
                
                <article class="bottom-post">
                    <header class="interaction">
                        <div class="like-post">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline" id="icon-coment${[i]}"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </header>
                    <article class="like-info">
                        <img src="${posts[i].perfiCurtidor}" />
                        <p>curtido por <b>${posts[i].seguidor}</b> e <b>outras ${posts[i].curtidas} pessoas</b></p>
                    </article>
                </article>
                <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                </div>
                <footer id="rodape-post">
                    <main class="coments " >
                    <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="card-coments">
                        <img src="${posts[i].perfi}" />
                        <p><b>${posts[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
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
    console.log(quantidadeImage)
    postBox.innerHTML += postItem;
    


    let postVideoItem = ``;

    for (let i = 0; i < videosPost.length; i++) {

        postVideoItem += `
            <section class="post-container" id="${[i]}">
                <header class="top-post">
                    <div class="card-perfil">
                        <img src="${videosPost[i].perfi}" />
                        <p>${videosPost[i].nome}</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </header>
                <div class="img-post">
                    <video class="video" autoplay muted loop controls> 
                        <source class="mp4" src="${videosPost[i].videoMp4}" type="video/mp4" >
                        <source src="${videosPost[i].videoOgv}" type="video/ogv" >
                    </video>
                </div>
                
                <article class="bottom-post">
                    <header class="interaction">
                        <div class="like-post">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline" id="icon-coment${[i+1+quantidadeImage]}"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </header>
                    <article class="like-info">
                        <img src="${videosPost[i].perfiCurtidor}" />
                        <p>curtido por <b>${videosPost[i].seguidor}</b> e <b>outras ${videosPost[i].curtidas} pessoas</b></p>
                    </article>
                </article>
                <footer id="rodape-post">
                    <main class="coments " >
                        <div class="card-coments">
                            <img src="${videosPost[i].perfi}" />
                            <p><b>${videosPost[i].nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                            <ion-icon name="heart-outline"></ion-icon>
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
    postBox.innerHTML += postVideoItem;

}
newPost();