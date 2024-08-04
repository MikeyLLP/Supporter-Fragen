const betaBox = document.querySelector(".wrapper");
const acceptBtn = betaBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
  // automatische cookie verlängerung
  document.cookie = "CookieBy=MikeyLLP; max-age=" + (60 * 60 * 24 * 30);

  // Überprüfen, ob das Cookie gesetzt wurde
  let checkCookie = document.cookie.includes("CookieBy=MikeyLLP");

  if (checkCookie) {
    betaBox.classList.add("hide"); // verstekt die cookiebox wen jemmand akzeptiert
  } else {
    alert("Cookie kann nicht gesetzt werden"); // Error wen cookies nicht akzeptiert werden
  }
};

//automatischer cookie schek
if (document.cookie.includes("CookieBy=MikeyLLP")) {
    betaBox.classList.add("hide");
}



function toggleText(boxNumber) {
    var textBox = document.getElementById('textBox' + boxNumber);
    var isActive = textBox.classList.contains('active');

    // Verstecke alle Text-Boxen
    var allTextBoxes = document.querySelectorAll('.text-box');
    allTextBoxes.forEach(function(box) {
        box.classList.remove('active');
    });

    // Zeige die ausgewählte Text-Box an
    if (!isActive) {
        textBox.classList.add('active');
    }
}

function copyText(id, button) {
    var textToCopy = document.getElementById(id).innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Erfolgreich kopiert
        button.innerText = 'Kopiert!';
        button.style.backgroundColor = '#4caf50'; // Grün einfärben
        setTimeout(function() {
            button.innerText = 'Text kopieren';
            button.style.backgroundColor = '#2a6bf6'; // Zurücksetzen auf ursprüngliche Farbe
        }, 2000); // Zurücksetzen nach 1 Sekunden

    }).catch(function(err) {
        console.error('Konnte den Text nicht kopieren: ', err);
    });
}

const aliases = {
    1: ["events", "wann", "welche events"],
    2: ["fishing", "rod", "angeln", "OP"],
    3: ["Villagers", "keine villager", "Villis"],
    4: ["was ist", "Experience", "Enchantmens", "Enchantment", "Enchantments"],
    5: ["was ist", "Replenish", "Enchantmens", "Enchantment", "Enchantments"],
    6: ["was ist", " Soulbound", "Enchantmens", "Enchantment", "Enchantments"],
    7: ["was ist", "Telekinesis", "Enchantmens", "Enchantment", "Enchantments"],
    8: ["was ist", "Beheading", "Enchantmens", "Enchantment", "Enchantments"],
    9: ["was ist", "Silent Gaze", "Enchantmens", "Enchantment", "Enchantments"],
    10: ["was ist", "Rocket Saver", "Enchantmens", "Enchantment", "Enchantments"],
    11: ["Veteran", "Vorteile", "Ränge", "Rang"],
    12: ["Veteran", "Wie wird", "Ränge", "Rang", "bekommen"],
    13: ["aliases"],
    14: ["aliases"],
    15: ["aliases"],
    
    
};

function searchBoxes() {
    var input, filter, container, boxes, box, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toLowerCase();
    container = document.getElementsByClassName('container')[0];
    boxes = container.getElementsByClassName('box');
    
    for (i = 0; i < boxes.length; i++) {
        box = boxes[i];
        txtValue = box.textContent || box.innerText;
        let boxId = box.getAttribute('data-id');
        let aliasList = aliases[boxId];
        
        let matchFound = aliasList.some(alias => alias.toLowerCase().includes(filter));
        
        if (txtValue.toLowerCase().indexOf(filter) > -1 || matchFound) {
            box.style.display = "";
        } else {
            box.style.display = "none";
        }
    }
}

/*Um die Daten zu löschen, die du über den von uns erstellten JavaScript-Code im Local Storage gespeichert hast, kannst du folgende Schritte durchführen:

Löschen der Daten im Local Storage:
Manuelles Löschen im Browser:
Öffne die Entwicklertools deines Browsers (normalerweise durch Drücken von F12 oder Rechtsklick und "Untersuchen" wählen).
Navigiere zur Registerkarte "Application" oder "Anwendungen" (abhängig von deinem Browser).
Wähle im linken Bereich "LocalStorage" aus.
Finde die Webseite oder den Server, von dem du die Daten löschen möchtest. In unserem Fall wird es wahrscheinlich die URL sein, die deine Webseite oder der lokale Pfad, den du verwendest, um auf die Webseite zuzugreifen.
K Con und , th um So*/
