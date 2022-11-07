let containerCards = document.querySelector(".container_cards");

// for (i = 1; i <= 6; i++) {
//     let card = document.createElement("div");
//     card.classList.add("card");
//     document.querySelector(".container_cards").append(card);

//     let img = document.createElement("img");
//     img.classList.add("card-img-top");
//     card.appendChild(img);

//     let cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     card.appendChild(cardBody);

//     let p = document.createElement("div");
//     p.classList.add("card-text");
//     cardBody.appendChild(p)
//     let pro = document.createElement("div");
//     pro.classList.add("card-text_1");
//     cardBody.appendChild(pro)

// }
let card = document.querySelector(".container_cards")
let pro = document.querySelector(".card-text_1")
let p = document.querySelector(".card-text");
const arrTeam = [
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/angela-caroll-chief-editor.jpg",
        nome: "Angela Caroll",
        professione: "Chief Editor",

    },
    {
        img: "img/walter-gordon-office-manager.jpg",
        nome: "Walter Gordon",
        professione: "Founder & Office Manager",

    },
    {
        img: "img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        professione: "Social Media Managern",

    },
    {
        img: "img/scott-estrada-developer.jpg",
        nome: "Scott Estrada",
        professione: "Developer",

    },
    {
        img: "img/barbara-ramos-graphic-designer.jpg",
        nome: "Barbara Ramos",
        professione: "Graphic Designer",

    }
];

for (i = 0; i < arrTeam.length; i++){
containerCards.innerHTML += `<div class="card">
<img src="${arrTeam[i].img}" class="card-img-top" alt="...">
<div class="card-body">
  <div class="card-text">${arrTeam[i].nome}</div>
  <div class="card-text_1">${arrTeam[i].professione}</div>

</div>
</div>`
}
