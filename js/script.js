let container_card = document.querySelector(".container_card");

for (i = 1; i <= 6; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    document.querySelector(".container_cards").append(card);

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let p = document.createElement("div");
    p.classList.add("card-text");
    cardBody.appendChild(p)
    let pro = document.createElement("div");
    pro.classList.add("card-text_1");
    cardBody.appendChild(pro)

}

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
    document.querySelector(".card-img-top").src = "img/wayne-barnett-founder-ceo.jpg";
    pro.innerHTML = `${arrTeam[i].professione}`
    p.innerHTML = `${arrTeam[i].nome}`
    
    // console.log(`${i}: ${arrTeam[i].nome} ${arrTeam[i].professione}`)
}
