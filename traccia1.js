//-- Traccia 1--//

let persona = {
    nome: "Livioara",
    cognome: "Berbecaru",
    eta: "38",
    saluto:"Ciao",


    CambiaSalutoPersona: function(nuovoSaluto) {
        this.saluto = nuovoSaluto
        
    }
}
persona.CambiaSalutoPersona("Buongiorno")
persona.nome
console.log(persona.saluto, persona.nome)





