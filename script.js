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
// Funktion zum Anzeigen der gespeicherten Counter
function displayCounters() {
    document.getElementById('counter1').innerText = counter1;
    document.getElementById('counter2').innerText = counter2;
    document.getElementById('counter3').innerText = counter3;
/* --------------------------------------------------------------------------------------------- */
    document.getElementById('counter4').innerText = counter4; // Falls weitere Boxen hinzugefügt werden
    /*  Hier neue box hinzufügen /\ */  
    document.getElementById('counter5').innerText = counter5;                                /* /\ */
}
/* --------------------------------------------------------------------------------------------- */
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
    textContent += `| Wan welche Events wurde: ${counter1}\n`;
    textContent += `| Wie sieht eine Op-Fishing Rod aus: ${counter2}\n`;
    textContent += `| Warum keine Villager: ${counter3}\n`;
/* --------------------------------------------------------------------------------------------- */
    textContent += `| Was ist Experience: ${counter4}\n`; // Falls weitere Boxen hinzugefügt werden    +1 box machen wen bennötigt
/* --------------------------------------------------------------------------------------------- */
    textContent += `| Was ist Replenish: ${counter5}\n`;
    textContent += `+---------------------------------------+\n`;
    textContent += `| Erstellt am: ${formattedTimestamp}       |\n`;
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
        
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        /* --------------------------------------------------------------------------------------------- */
        counter4 = 0; // Falls weitere Boxen hinzugefügt werden +1 box machen wen bennötigt
        /* --------------------------------------------------------------------------------------------- */
        counter5 = 0;
        displayCounters();
        
        // Ändere den Reset-Button-Stil nach dem Klicken
        document.getElementById('resetButton').style.backgroundColor = '#4caf50'; // Grün einfärben
        setTimeout(function() {
            document.getElementById('resetButton').style.backgroundColor = '#2a6bf6'; // Zurücksetzen auf ursprüngliche Farbe
        }, 500); // Zurücksetzen nach 0,5 Sekunden
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
