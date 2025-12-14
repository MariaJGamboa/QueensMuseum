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
        short: "short dult",
        medium: "medium adult",
        long: "long adult"
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
        short: "short dult",
        medium: "medium adult",
        long: "long adult"
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
  document.getElementById("Materiality").textContent = item.metadata.materiality;

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

