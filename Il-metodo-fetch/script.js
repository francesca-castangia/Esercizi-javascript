const cardCodes= [
    "01001",
    "01002",
    "01003",
    "01004",
    "01005",
    "01006",
    "01007",
    "01008",
    "01009",
    "01012",
    "02001",
    "02002",
    "02003",
    "02004",
    "02005",

];


        const randomCard = cardCodes[Math.floor(Math.random() * cardCodes.length)];

        const url = `https://ringsdb.com/api/public/card/${randomCard}`;

async function fetchApi() {
      try {
        const response = await fetch(url);
        const cardJson = await response.json();
        const card = cardJson;
        
        const imagUrl= `https://ringsdb.com${card.imagesrc}`;
        const span = document.querySelector(".pg-name");
        const img = document.querySelector(".pg-img");

        span.innerText = card.name;
        img.setAttribute("src", imagUrl);


      } catch (error) {
        document.getElementById('card-name').textContent = 'Errore nel caricamento.';
        console.error('Errore:', error);
      }
    }

    fetchApi();