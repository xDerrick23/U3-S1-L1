function indovinaNumero(giocatore1: number, giocatore2: number): string {

    const numeroCasuale: number = Math.floor(Math.random() * (100 - 1) + 1);


    if (giocatore1 === numeroCasuale) {
        return `Numero casuale generato = ${numeroCasuale} "Il giocatore 1 ha indovinato il numero!"`;
    } else if (giocatore2 === numeroCasuale) {
        return `Numero casuale generato = ${numeroCasuale} "Il giocatore 2 ha indovinato il numero!"`;
    } else {

        const distanza1: number = Math.abs(numeroCasuale - giocatore1);
        const distanza2: number = Math.abs(numeroCasuale - giocatore2);

        const vincitore: string = distanza1 < distanza2 ? "1" : "2";
        return `Numero casuale generato = ${numeroCasuale} "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore ${vincitore} si è avvicinato di più!"`;
    }
}


console.log(indovinaNumero(5, 10));
