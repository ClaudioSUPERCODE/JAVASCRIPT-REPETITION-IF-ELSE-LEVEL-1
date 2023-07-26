
// IF & ELSE - LEVEL 1_1

// Wir brauchen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion checkAge().
// Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.

// Im Funktionskörper:
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “volljährig” oder “minderjährig” ausgeben.

function checkAge() {
    let ageInput = document.getElementById("ageInput").value
    let res = document.getElementById("resLvl1")

    if (ageInput >= 18) {
        res.innerHTML = "Volljährig"
    } else {
        res.innerHTML = "Minderjährig"
    }
}