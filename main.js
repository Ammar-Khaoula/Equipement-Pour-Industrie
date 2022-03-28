const txtAnim = document.querySelector('.domaine');

new Typewriter(txtAnim, {
        loop: true,
        deleteSpeed: 20
    })
    .changeDelay(70)
    //.typeString('Notre Entreprise propose les équipemets pour industrie dans les domaines des: <br/>')
    //.pauseFor(500)
    .typeString('<span style="color: #d88005"> Transmission de puissance mécanique, pneumatique et instrumentation.</span>')
    .pauseFor(2000)
    .deleteChars(68)
    .typeString('<span style="color: #d88005"> Produits d\'usinage et métrologie. </span>')
    .pauseFor(2000)
    .deleteChars(34)
    .typeString('<span style="color: #d88005"> Fournitures industrielles. </span>')
    .pauseFor(2000)
    .deleteChars(27)
    .typeString('<span style="color: #d88005"> Equipements de protection individuelle. </span>')
    .pauseFor(2000)
    .deleteChars(40)
    .typeString('<span style="color: #d88005">Produits nettoyant, protection, démoulant et dégrippant. </span>')
    .pauseFor(2000)
    .deleteChars(57)
    .typeString('<span style="color: #d88005"> Bac de stockage ajustable </span>')
    .pauseFor(2000)
    .deleteChars(30)
    .start()

/*******************start section*/
let productContainer = document.querySelectorAll(".product-container");
let nextBtn = document.querySelectorAll(".nxt-btn");
let preBtn = document.querySelectorAll(".pre-btn");


productContainer.forEach((item, i) => {
        let container = item.getBoundingClientRect();
        let containerWidth = container.width;

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    })
    /*end section*************************/