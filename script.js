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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('auswahl-boxen');

    // Array mit verschiedenen Texten und Classnames
    const boxes = [
        { text: 'Falsches Ticket (Unban)', className: 'box', category: 'Ticket System'},
        { text: '1.21 Server Nicht da', className: 'box', category: 'Ticket System'},
        { text: 'Wann welche Events Survival Server', className: 'box', category: 'Community Server' },
        { text: 'Op-Fishing Rod', className: 'box', category: 'Community Server'},
        { text: 'Warum keine Villager', className: 'box', category: 'Community Server' },
        { text: 'Was ist Experience', className: 'box', category: 'Community Server' },
        { text: 'Was ist Replenish', className: 'box', category: 'Community Server' },
        { text: 'Was ist Soulbound', className: 'box', category: 'Community Server'},
        { text: 'Was ist Telekinesis', className: 'box', category: 'Community Server'},
        { text: 'Was ist Beheading', className: 'box', category: 'Community Server'},
        { text: 'Was ist Silent Gaze', className: 'box', category: 'Community Server'},
        { text: 'Was ist Rocket Saver', className: 'box', category: 'Community Server'},
        { text: 'Hat man als Veteran Vorteile', className: 'box', category: 'Alle'},
        { text: 'Wie wird man Veteran', className: 'box', category: 'Alle'},
        { text: 'Texturen Pack läd nicht', className: 'box', category: 'Ticket System'},
        { text: 'Beschreibung', className: 'box hiden', category: 'unbekannt'},
        { text: 'Beschreibung', className: 'box hiden', category: 'unbekannt'},
        { text: 'Beschreibung', className: 'box hiden', category: 'unbekannt'},
        { text: 'Beschreibung', className: 'box hiden', category: 'unbekannt'},
        { text: 'Beschreibung', className: 'box hiden', category: 'unbekannt'}
    ];

    // Schleife zum Erstellen der Boxen
    boxes.forEach((boxData, index) => {
        const box = document.createElement('div');
        box.className = `box hidden ${boxData.className}`;
        box.dataset.id = index + 1;
        box.dataset.category = boxData.category;
        box.textContent = boxData.text;
        box.onclick = () => toggleText(index + 1);
        container.appendChild(box);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('text-box-container');

    // Arrays mit verschiedenen Überschriften und Texten
    const headings = [
        'Falsches Ticket (Unban)', '1.21 Server Nicht da', 'Wann welche Events? Survival Server', 
        'Wie sieht eine Op-Fishing Rod aus?', 'Warum keine Villager?',
        'Was ist Experience?', 'Was ist Replenish?', 'Was ist Soulbound?',
        'Was ist Telekinesis?', 'Was ist Beheading?', 'Was ist Silent Gaze?',
        'Was ist Rocket Saver?', 'Hat man als Veteran Vorteile?', 'Wie wird man Veteran?', 'Texturen Pack läd nicht',
        'Überschrift 16', 'Überschrift 17', 'Überschrift 18',
        'Überschrift 19', 'Überschrift 20'
    ];

    const texts = [
        'Das ist leider nicht der richtige Ticket-Typ. Der Support kann leider nicht helfen. Bitte eröffne ein anderes Ticket mit dem Typ "Unban Ticket".', 
        'Im Moment können keine Anfragen angenommen werden, da der Server vorübergehend geschlossen ist. Bitte versuche es erneut, wenn der Minecraft-Community Server für die 1.21 verfügbar ist. Falls du aber Probleme hast, Eröffne bitte ein Event Support Ticket.',
        'Von Montag bis Freitag gibt es meistens um 20 Uhr ein 20-minütiges Mining-Event. Angel-Events finden samstags und sonntags ebenfalls um 20 Uhr für 20 Minuten statt.',
        'Eine Op-Fishing Rod besteht aus Unbraking 3 ,Luck of the see 3 ,Lure 3 ,Mending...',
        'Auf dem Server gibt es keine Villager, weil sie viel zu OP sind und man durch sie zu schnell an alle benötigten Items kommt. Das würde den Spaß am Spiel nehmen.',
        'Von Experience gibt es 3 Stufen, und jede Stufe sorgt dafür,  dass 10% mehr Erfahrungspunkte pro Level droppen.',
        'Replenish kommt auf die Hoe und sorgt dafür, dass Nutzpflanzen nach dem Ernten automatisch nachgepflanzt werden.',
        'Soulbound kann auf alle Rüstungen und Werkzeuge angewendet werden und sorgt dafür, dass das Item nach deinem Tod in deinem Inventar bleibt.',
        'Telekinesis kann auf alle Werkzeuge angewendet werden und sorgt dafür, dass Drops und Erfahrung direkt in dein Inventar gehen.',
        'Beheading erhöht die Chance, einen Mob-Kopf zu erhalten, um 2% pro Level. Es kann auf Schwerter, Äxte, Bögen und Dreizacke angewendet werden und hat drei Stufen.', 
        'Silent Gaze macht, dass Endermäner nicht aggressiv werden, wenn du sie anschaust. Silent Gaze kann nur auf den Helm gepackt werden.',
        'Rocket Saver kann nur auf die Elytra angewendet werden und erhöht die Wahrscheinlichkeit um +15% pro Level, dass du keine Rakete verbrauchst.',
        'Nein, als Veteran hat man keine großen Vorteile. Man kann dennoch den Server betreten, obwohl er schon voll ist.',
        'Spieler, welche auf dem 1.20 Server mehr als 200 Stunden aktive Spielzeit hatten werden Veteran.',
        'Versuche es mal **[hiermit](https://server.castcrafter.de/troubleshooting#-82g4sg_32)** und gehe die Schritte bitte vollständig durch.',
        'Text 16', 
        'Text 17', 
        'Text 18',
        'Text 19', 
        'Text 20'
    ];

    // Schleife zum Erstellen der Boxen
    for (let i = 0; i < 20; i++) {
        // Erstelle die Hauptbox
        const textBox = document.createElement('div');
        textBox.className = 'text-box';
        textBox.id = `textBox${i + 1}`;

        // Erstelle die Überschrift
        const heading = document.createElement('h1');
        heading.className = 'überschrift';
        heading.textContent = headings[i];
        textBox.appendChild(heading);

        // Erstelle die Linie
        const line = document.createElement('hr');
        line.className = 'linie';
        textBox.appendChild(line);

        // Erstelle den Textabschnitt
        const textParagraph = document.createElement('p');
        textParagraph.id = `textToCopy${i + 1}`;
        textParagraph.className = 'texte';
        textParagraph.textContent = texts[i];
        textBox.appendChild(textParagraph);

        // Erstelle den Button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Text kopieren';
        copyButton.onclick = () => copyText(`textToCopy${i + 1}`, copyButton);
        textBox.appendChild(copyButton);

        // Füge die Box dem Container hinzu
        container.appendChild(textBox);
    }
});

// Funktion zum Kopieren des Textes
function copyText(textId, button) {
    const textElement = document.getElementById(textId);
    const range = document.createRange();
    range.selectNode(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        alert('Text kopiert!');
    } catch (err) {
        alert('Kopieren fehlgeschlagen!');
    }
    window.getSelection().removeAllRanges();
}


function toggleText(id) {
    const box = document.querySelector(`.box[data-id='${id}']`);
    box.classList.toggle('hidden');
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
    1: ["Unban", "Ticket", "Falsch", "Support"],
    2: ["1.21", "Ticket", "Falsch", "White-List", "Support", "anderes"],
    3: ["events", "wann", "welche events"],
    4: ["fishing", "rod", "angeln", "OP"],
    5: ["Villagers", "keine villager", "Villis"],
    6: ["was ist", "Experience", "Enchantmens", "Enchantment", "Enchantments"],
    7: ["was ist", "Replenish", "Enchantmens", "Enchantment", "Enchantments"],
    8: ["was ist", " Soulbound", "Enchantmens", "Enchantment", "Enchantments"],
    9: ["was ist", "Telekinesis", "Enchantmens", "Enchantment", "Enchantments"],
    10: ["was ist", "Beheading", "Enchantmens", "Enchantment", "Enchantments"],
    11: ["was ist", "Silent Gaze", "Enchantmens", "Enchantment", "Enchantments"],
    12: ["was ist", "Rocket Saver", "Enchantmens", "Enchantment", "Enchantments"],
    13: ["Veteran", "Vorteile", "Ränge", "Rang"],
    14: ["Veteran", "Wie wird", "Ränge", "Rang", "bekommen"],
    15: ["Tp", "Texturen Pack", "Support", "Error", "Fehler", "läd nicht"],
    16: ["aliases"],
    17: ["aliases"],
    18: ["aliases"],
    19: ["aliases"],
    20: ["aliases"],
};

function searchBoxes() {
    var input, filter, container, boxes, box, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toLowerCase();
    container = document.getElementById('auswahl-boxen');
    boxes = container.getElementsByClassName('box');
    
    var selectedFilter = document.getElementById('filter-dropdown').value;

    for (i = 0; i < boxes.length; i++) {
        box = boxes[i];
        txtValue = box.textContent || box.innerText;
        let boxId = box.getAttribute('data-id');
        let aliasList = aliases[boxId] || [];
        
        // Überprüfen, ob der Suchtext in den Aliasen enthalten ist
        let matchFound = aliasList.some(alias => alias.toLowerCase().includes(filter));
        
        // Überprüfen, ob die Box dem ausgewählten Filter entspricht
        let matchesFilter = selectedFilter === 'alle' || box.getAttribute('data-category') === selectedFilter;

        // Überprüfen, ob die Box angezeigt werden soll
        if ((txtValue.toLowerCase().indexOf(filter) > -1 || matchFound) && matchesFilter) {
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
