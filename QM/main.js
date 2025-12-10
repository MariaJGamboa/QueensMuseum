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
