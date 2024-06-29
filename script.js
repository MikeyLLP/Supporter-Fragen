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
/* --------------------------------------------------------------------------------------------- */
// Initialisierung der Counter-Variablen aus dem Local Storage oder standardmäßig auf 0
let counter1 = parseInt(localStorage.getItem('counter1')) || 0;
let counter2 = parseInt(localStorage.getItem('counter2')) || 0;
let counter3 = parseInt(localStorage.getItem('counter3')) || 0;
/* --------------------------------------------------------------------------------------------- */
let counter4 = parseInt(localStorage.getItem('counter4')) || 0; // Falls weitere Boxen hinzugefügt werden       
/*  Hier neue box hinzufügen /\ */                                              /* /\ */
/* --------------------------------------------------------------------------------------------- */
let counter5 = parseInt(localStorage.getItem('counter5')) || 0;
let counter6 = parseInt(localStorage.getItem('counter6')) || 0;
let counter7 = parseInt(localStorage.getItem('counter7')) || 0;
let counter8 = parseInt(localStorage.getItem('counter8')) || 0;
let counter9 = parseInt(localStorage.getItem('counter9')) || 0;
let counter10 = parseInt(localStorage.getItem('counter10')) || 0;
let counter11 = parseInt(localStorage.getItem('counter11')) || 0;
let counter12 = parseInt(localStorage.getItem('counter12')) || 0;
let counter13 = parseInt(localStorage.getItem('counter13')) || 0;
let counter14 = parseInt(localStorage.getItem('counter14')) || 0;
let counter15 = parseInt(localStorage.getItem('counter15')) || 0;


// zum Anzeigen der gespeicherten Counters
function displayCounters() {
    document.getElementById('counter1').innerText = counter1;
    document.getElementById('counter2').innerText = counter2;
    document.getElementById('counter3').innerText = counter3;
/* --------------------------------------------------------------------------------------------- */
    document.getElementById('counter4').innerText = counter4; // Falls weitere Boxen hinzugefügt werden
    /*  Hier neue box hinzufügen /\ */  
/* --------------------------------------------------------------------------------------------- */
    document.getElementById('counter5').innerText = counter5;
    document.getElementById('counter6').innerText = counter6;
    document.getElementById('counter7').innerText = counter7;
    document.getElementById('counter8').innerText = counter8;
    document.getElementById('counter9').innerText = counter9;
    document.getElementById('counter10').innerText = counter10;
    document.getElementById('counter11').innerText = counter11;
    document.getElementById('counter12').innerText = counter12;
    document.getElementById('counter13').innerText = counter13;
    document.getElementById('counter14').innerText = counter14;
    document.getElementById('counter15').innerText = counter15;
}

// Anzeige der gespeicherten Counter beim Laden der Seite
displayCounters();

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
        
        // Zähler erhöhen und im Local Storage sowie im HTML aktualisieren
        if (id === 'textToCopy1') {
            counter1++;
            localStorage.setItem('counter1', counter1);
            document.getElementById('counter1').innerText = counter1;
        } else if (id === 'textToCopy2') {
            counter2++;
            localStorage.setItem('counter2', counter2);
            document.getElementById('counter2').innerText = counter2;
        } else if (id === 'textToCopy3') {
            counter3++;
            localStorage.setItem('counter3', counter3);
            document.getElementById('counter3').innerText = counter3;
/* --------------------------------------------------------------------------------------------- */
        } else if (id === 'textToCopy4') {
            counter4++;
            localStorage.setItem('counter4', counter4);
            document.getElementById('counter4').innerText = counter4;
        }// +1 box machen wen bennötigt
/* --------------------------------------------------------------------------------------------- */
        else if (id === 'textToCopy5') {
            counter5++;
            localStorage.setItem('counter5', counter5);
            document.getElementById('counter5').innerText = counter5;
        } 
        else if (id === 'textToCopy6') {
            counter6++;
            localStorage.setItem('counter6', counter6);
            document.getElementById('counter6').innerText = counter6;
        }
        else if (id === 'textToCopy7') {
            counter7++;
            localStorage.setItem('counter7', counter7);
            document.getElementById('counter7').innerText = counter7;
        }
        else if (id === 'textToCopy8') {
            counter8++;
            localStorage.setItem('counter8', counter8);
            document.getElementById('counter8').innerText = counter8;
        }
        else if (id === 'textToCopy9') {
            counter9++;
            localStorage.setItem('counter9', counter9);
            document.getElementById('counter9').innerText = counter9;
        }
        else if (id === 'textToCopy10') {
            counter10++;
            localStorage.setItem('counter10', counter10);
            document.getElementById('counter10').innerText = counter10;
        }
        else if (id === 'textToCopy11') {
            counter11++;
            localStorage.setItem('counter11', counter11);
            document.getElementById('counter11').innerText = counter11;
        }
        else if (id === 'textToCopy12') {
            counter12++;
            localStorage.setItem('counter12', counter12);
            document.getElementById('counter12').innerText = counter12;
        }
        else if (id === 'textToCopy13') {
            counter13++;
            localStorage.setItem('counter13', counter13);
            document.getElementById('counter13').innerText = counter13;
        }
        else if (id === 'textToCopy14') {
            counter14++;
            localStorage.setItem('counter14', counter14);
            document.getElementById('counter14').innerText = counter14;
        }
        else if (id === 'textToCopy15') {
            counter15++;
            localStorage.setItem('counter15', counter15);
            document.getElementById('counter15').innerText = counter15;
        }
    }).catch(function(err) {
        console.error('Konnte den Text nicht kopieren: ', err);
    });
}

function downloadCounters() {
    // Erstelle den Textinhalt für die Textdatei
    let now = new Date();
    let formattedTimestamp = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    let textContent = `+---------------------------------------+\n`;
    textContent += `| Anzahl an Kopien für jene Frage       |\n`;
    textContent += `+---------------------------------------+\n`;
    textContent += `| Wan welche Events wurde: ${counter1}            |\n`;
    textContent += `| Wie sieht eine Op-Fishing Rod aus: ${counter2}  |\n`;
    textContent += `| Warum keine Villager: ${counter3}               |\n`;
/* --------------------------------------------------------------------------------------------- */
    textContent += `| Was ist Experience: ${counter4}                 |\n`; // Falls weitere Boxen hinzugefügt werden    +1 box machen wen bennötigt
/* --------------------------------------------------------------------------------------------- */
    textContent += `| Was ist Replenish: ${counter5}                  |\n`;
    textContent += `| Was ist Soulbound: ${counter6}                  |\n`;
    textContent += `| Was ist Telekinesis: ${counter7}                |\n`;
    textContent += `| Was ist Beheading: ${counter8}                  |\n`;
    textContent += `| Was ist Silent Gaze: ${counter9}                |\n`;
    textContent += `| Was ist Rocket Saver: ${counter10}               |\n`;
    textContent += `| Hat man als Veteran Vorteile: ${counter11}       |\n`;
    textContent += `| Wie wird man Veteran: ${counter12}               |\n`;
    textContent += `| Text: ${counter13}                               |\n`;
    textContent += `| Text: ${counter14}                               |\n`;
    textContent += `| Text: ${counter15}                               |\n`;
    textContent += `+---------------------------------------+\n`;
    textContent += `| Erstellt am: ${formattedTimestamp}        |\n`;
    textContent += `+---------------------------------------+\n`;

    // Erstelle ein Blob mit dem Textinhalt
    let blob = new Blob([textContent], { type: 'text/plain' });

    // Erstelle einen URL zum Blob
    let url = window.URL.createObjectURL(blob);

    // Erstelle ein unsichtbares <a> Element zum Herunterladen
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Kopien_Counter_Daten.txt'; // Dateiname für die heruntergeladene Datei

    // Füge das <a> Element zum Dokument hinzu und klicke es an
    document.body.appendChild(a);
    a.click();

    // Entferne das <a> Element nach dem Klicken
    document.body.removeChild(a);

    // URL des Blob-Objekts freigeben
    window.URL.revokeObjectURL(url);

    // Ändere den Download-Button-Stil nach dem Klicken
    document.getElementById('downloadButton').style.backgroundColor = '#4caf50'; // Grün einfärben
    setTimeout(function() {
        document.getElementById('downloadButton').style.backgroundColor = '#2a6bf6'; // Zurücksetzen auf ursprüngliche Farbe
    }, 500); // Zurücksetzen nach 2 Sekunden
}

function resetCounters() {
    // Bestätigungsdialog anzeigen
    if (confirm('Möchten du wirklich alle Counter zurücksetzen?')) {
        localStorage.removeItem('counter1');
        localStorage.removeItem('counter2');
        localStorage.removeItem('counter3');
/* --------------------------------------------------------------------------------------------- */
        localStorage.removeItem('counter4'); // Falls weitere Boxen hinzugefügt werden +1 box machen wen bennötigt
/* --------------------------------------------------------------------------------------------- */
        localStorage.removeItem('counter5');
        localStorage.removeItem('counter6');
        localStorage.removeItem('counter7');
        localStorage.removeItem('counter8');
        localStorage.removeItem('counter9');
        localStorage.removeItem('counter10');
        localStorage.removeItem('counter11');
        localStorage.removeItem('counter12');
        localStorage.removeItem('counter13');
        localStorage.removeItem('counter14');
        localStorage.removeItem('counter15');
        
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        /* --------------------------------------------------------------------------------------------- */
        counter4 = 0; // Falls weitere Boxen hinzugefügt werden +1 box machen wen bennötigt
        /* --------------------------------------------------------------------------------------------- */
        counter5 = 0;
        counter6 = 0;
        counter7 = 0;
        counter8 = 0;
        counter9 = 0;
        counter10 = 0;
        counter11 = 0;
        counter12 = 0;
        counter13 = 0;
        counter14 = 0;
        counter15 = 0;

        displayCounters();
        
        // Ändere den Reset-Button-Stil nach dem Klicken
        document.getElementById('resetButton').style.backgroundColor = '#4caf50'; // Grün einfärben
        setTimeout(function() {
            document.getElementById('resetButton').style.backgroundColor = '#2a6bf6'; 
        }, 500);
    }
}
const aliases = {
    1: ["events", "wann", "welche events"],
    2: ["fishing", "rod", "angeln"],
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
