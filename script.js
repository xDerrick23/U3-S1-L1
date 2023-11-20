function indovinaNumero(giocatore1, giocatore2) {

    var numeroCasuale = Math.floor(Math.random() * (100 - 1) + 1);

    if (giocatore1 === numeroCasuale) {
        return "Numero casuale generato = ".concat(numeroCasuale, " \"Il giocatore 1 ha indovinato il numero!\"");
    }
    else if (giocatore2 === numeroCasuale) {
        return "Numero casuale generato = ".concat(numeroCasuale, " \"Il giocatore 2 ha indovinato il numero!\"");
    }
    else {
        var distanza1 = Math.abs(numeroCasuale - giocatore1);
        var distanza2 = Math.abs(numeroCasuale - giocatore2);
        var vincitore = distanza1 < distanza2 ? "1" : "2";
        return "Numero casuale generato = ".concat(numeroCasuale, " \"Nessuno dei due ha azzeccato il numero casuale, ma il giocatore ").concat(vincitore, " si \u00E8 avvicinato di pi\u00F9!\"");
    }
}
console.log(indovinaNumero(5, 10));
