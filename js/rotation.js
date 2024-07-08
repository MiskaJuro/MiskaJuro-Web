// rotation.js

function redirectIfPhonePortrait() {
  // Detekce, jestli je zařízení telefon
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Detekce orientace zařízení
    if (window.orientation === 0 || window.orientation === 180) {
      window.location.href = "https://miskajuro.github.io/MiskaJuro-Web/old.html";
    }
  }
}

// Zavolání funkce při načtení stránky a při změně orientace
window.onload = redirectIfPhonePortrait;
window.onorientationchange = redirectIfPhonePortrait;
