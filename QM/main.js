//javascript per cambiare gli stili//

function changeTheme(cssFile) {
        const link = document.getElementById("theme-css");
        if(link) {
      // cambia il tema e forza ricaricamento senza cache
          link.href = cssFile + "?v=" + Date.now();
          sessionStorage.setItem('selectedTheme', cssFile)
    }
      }
  // Applica il tema salvato al caricamento della pagina
        document.addEventListener('DOMContentLoaded', () => {
          const savedTheme = sessionStorage.getItem('selectedTheme');
          if(savedTheme) {
            const link = document.getElementById("theme-css");
            if(link) link.href = savedTheme;
          }
        });

// dati items 

const items = [
  {
   id: 1,
   title: "The Coronation Portrait",
   image: "images/coronation_portrait_elizI.jpg",
   metadata: {
    fullName: "The Coronation Portrait",
    date: "circa 1600",
    place: "National Portrait Gallery, London",
    materiality: "Oil on panel"
   },
   text: {
      children: {
        short: "short children",
        medium: "medium children",
        long: "long children"
      },
      adult: {
        short: " The portrait depicts Queen Elizabeth I with the clothes, crown and jewelry that she wore during her coronation ceremony, while holding the symbols of her authority as queen. The painting is from an unknown artist, painted around 1600-1610.",
        medium: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. Elizabeth is portrait  with the gold cloth that she wore during her coronation ceremony that had been made by her half-sister Mary five years before for her coronation. She holds the orb and scepter to symbolise her authority as queen reignant.",
        long: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. The portrait is now held in the National Portrait Gallery, London , UK. Elizabeth is depicted wearing a gold cloth that she wore during her coronation ceremony. The cloth was made for her half-sister Mary I for her own coronation five years early in 1553, the decision of using Mary’s coronation robe may suggest the willingness of Elizabeth of demonstrating the natural continuity between Mary and her own reign, inside of the Tudor dynasty. The color of the cloth, gold is a symbol of royalty, majesty and power, some suggest that it was a hint of the “Golden age” that it would be the Elizabethan reign. The tudor rose features throughout the coronation robe, the rose that combine the white rose of the York family and the red one of the Lancaster family, two houses that were united at the end of the War of roses with the marriage of Henry VII and Elizabeth of York, Elizabeth grandparents that began the Tudor Dynasty. Elizabeth is depicted with the crown and holding the orb and scepter symbols of her authority as queen reignant. Some historians argued the importance of the orb in the portrait, not just because it is a traditional royal symbol but is particularly relevant in Elizabeth's case, since she represents the head of the Church of England, due to her father's controversies with the catholic church and making England a protestant country."
    }
  }
  },

  {
   id: 2,
    title: "Chequers Ring",
    image: "images/chequers_ring.jpg",
    metadata: {
      fullName: "Chequers Ring",
      date: "1570",
      place: "unknown",
      materiality: "mother of pearl, colg, rubies"
    },
    text:{
      children: {
        short: "short children",
        medium: "medium children",
        long: "long children"
      },
      adult: {
        short: "'Chequers Ring' is one of the few surviving pieces of jewelry used by Queen Elizabeth I. Is a pearl ring with a set of rubies, with a locket with  the portrait of the queen itself and another woman, probably her mother or step-mother.",
        medium: "The 'Chequers Ring' is one of the most beloved jewels worn by Queen Elizabeth I, and one of the few surviving pieces of her jewels to us today. The ring dates mid-1570 and is a pearl ring with a string of gold with a set of table-cut of rubies, on the bezel part of the ring are white diamonds that form the E for Elizabeth and underneath an R for regina in cobalt blue enamel. Inside the basel there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. At the beginning it was thought that it was her mother Anne Boleyn or her step-sister Mary I, but  probably is Catherin Parr, Elizabeth step-mother.",
        long: "The ring dates to the mid-1570s, is a mother-of-pearl hoop mounted with a sheet of gold with a set of table-cut rubies. On the bezel white diamonds form the letter E for Elizabeth and underneath an R for regina in cobalt blue enamel. In the back of the bezel there is a phoenix, a typical symbol of the Seymour family, some argued that it was a gift from the Seymor Family to Elizabeth  (Jane Saymor was the third wife of Henry VIII, Elizabeth’s father, and the mother of Elizabeth's half brother, Edward VI who died at 15 years old). Others suggest that the phoenix was just a common symbol in other of Elizabeth’s jewellery. The most intriguing part of the ring is inside of the basel where there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. Due to the juxtaposition of Elizabeth’s portrait, it was said that the other portrait of a younger woman was traditionally said to be her mother, Anne Boleyn, specially because she was executed at a young age, when Elizabeth was just two years old. This was profoundly argued because it is said that Elizabeth mentioned very rarely her mother Anne, and the portrait shows a woman with red-ish hair color, therefore several argued that it was supposed to be her half-sister Mary I. It is likely that the young woman depicted is Catherine Parr (Elizabeth's father, Henry VIII last (six) wife), she is remembered with reddish hair and very close to Elizabeth, being her step-mother and a very important mother figure during adolescence."
    }
  }
  }


  


]


let currentItemIndex = 0;
let currentDifficulty = "children"; // default all’apertura
let showFullText = false; // stato iniziale show less
let showMediumOnly = false;


// cambio difficoltà
function changeTextChildren() {
    currentDifficulty = "children";
    showFullText = false;
    updateContent();
}

function changeTextAdult() {
    currentDifficulty = "adult";
    showFullText = false;
    updateContent();
}

// show more / less

let currentTextLevel = 0;

function showLess() {
   if (currentTextLevel > 0) {
        currentTextLevel--;
        updateContent();
    }

}

function showMore() {
      if (currentTextLevel < 2) {
        currentTextLevel++;
        updateContent();
    }
}




//update content
function updateContent() {
  const item = items[currentItemIndex];

  // titolo
  document.getElementById("titolo-item").textContent = item.title;

  // immagine
  const img = document.querySelector(".item-img");
  img.src = item.image;
  img.alt = item.title;

  // metadata
  document.getElementById("fullName").textContent = item.metadata.fullName;
  document.getElementById("date").textContent = item.metadata.date;
  document.getElementById("place").textContent = item.metadata.place;
  document.getElementById("materiality").textContent = item.metadata.materiality;

  // testi
  const textData = item.text[currentDifficulty];
  // Short sempre visibile solo in showLess
  document.getElementById("shortTextArea").textContent = (currentTextLevel === 0) ? textData.short : "";
  // Medium visibile solo in showMedium
  document.getElementById("mediumTextArea").textContent = (currentTextLevel === 1) ? textData.medium : "";

  // Long visibile solo in showMore
  document.getElementById("longTextArea").textContent = (currentTextLevel === 2) ? textData.long : "";;
}


// cambio item
function previousItem() {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    showFullText = false;
    updateContent();
}

function nextItem() {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    showFullText = false;
    updateContent();
}


document.addEventListener("DOMContentLoaded", () => {
  currentDifficulty = "children"; // default
  showFullText = false;
  currentItemIndex = 0; // primo item
  updateContent();
});

