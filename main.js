function linkStorie () {

    const storieBox = document.querySelector('.story')

    const perfilStorie = [
        {
        img:"./img/stories/denji-pochita.png",
        nome:"Denji",},
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },{
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },{
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
        {
            img:"./img/stories/denji-pochita.png",
            nome:"Denji",
        },
    ];

    let storieItem = ``;

    for (let i = 0; i < perfilStorie.length; i++) {
        storieItem += `
        <a href="./page-stories/index.html#${i+1}">
            <div class="card-story">
                <img src="${perfilStorie[i].img}" />
                <p>${perfilStorie[i].nome}</p>
            </div>
        </a>
        `
    }
    storieBox.innerHTML += storieItem;
}
linkStorie ();