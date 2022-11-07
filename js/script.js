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

    let p = document.createElement("p");
    p.classList.add("card-text");
    cardBody.appendChild(p)

}
let p = document.querySelector(".card-text");
const arrTeam = [
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    },
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        professione: "Founder & CEO",

    }
];
for (i = 0; i < arrTeam.length; i++){
    document.querySelector(".card-img-top").src = "img/wayne-barnett-founder-ceo.jpg";
    p.innerHTML = `${arrTeam[i].nome}`
    // (`${i}: ${arrTeam[i].nome} ${arrTeam[i].professione}`)
}