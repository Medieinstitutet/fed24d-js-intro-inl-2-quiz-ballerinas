### Skapa ett quiz med minst 20 frågor

    Array med objekt i. Objektet ska innehålla: ID, Frågan, svarsalternativen, det rätta svaret (?), spelad eller inte(true eller false).

### Varje fråga ska ha 3 svarsalternativ och endast 1 svarsalternativ ska vara korrekt

    Svarsalternativen kan vara radiobuttons. Det krävs att ett alternativ är valt för att “Nästa fråga”-knappen ska bli aktiv. 

### Frågorna ska presenteras i slumpmässig ordning, och du ska visa 10 frågor per spelomgång, om användaren väljer att spela igen, så ska inte samma 10 frågor komma upp på nytt

    I fallet 1:

    användaren kan spela två omgångar med två helt olika uppsättningar frågor men efter det nollställs kontrollen om frågan är spelad eller inte:
    For loop som slumpar fram 10 frågor. Loopen sorterar tills den har hittat 10 frågor som är ex “inte spelad = true”
    Spelar användaren tre gånger nollställs kontrollen om frågan är spelad och man kan få samma spel igen. 

    i fallet 2: 
    frågor slumpas fram helt blandat och spelat kan pågå i fler omgångar men risken finns att vissa 
    frågor blir återkommande. Någon form av random funktion. 

### Du ska få poäng för rätt svar
    Variabel för poängen, if correct - add 1p
    Totalpoäng visas i hörnet hela tiden?

### Det ska bara visas en fråga åt gången på skärmen

### Det ska finnas en tidräkning (uppåt). Tidräkningen ska stanna när alla frågor har besvarats.

### Det ska visas en bekräftelseruta som visar hur många frågor spelaren svarade rätt på (av totalt antal frågor), och hur lång tid det tog.



# Flödet:
**Startsida -**
- startGame() - click
- inputfält (i html) hämtar användarens användarnamn

**Starta spelet - knappklick**
- startTimeCount();
- randomQuestions();
- printQuestions();
    - innerHTML - svar och submit btn

- questionCouter(); -håller koll på vilken fråga användaren är på
- nextQuestionBtn (utgråad tills svar angetts)


**“nextQuestionBtn” - knappklick**
- pointsCounter();
- printQuestions();
- UpdateScore();

**Slutför**
- Stoppa tidräkning 
- Ny knapp visas som skickar användaren vidare till slutsidan 

- print startTimeCount(); 
- print pointsCounter();

- Spela igen -knappklick
- ResetTimer()
- ResetPoints()
