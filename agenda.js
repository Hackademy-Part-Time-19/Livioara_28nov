//--Traccia 2--//


let agenda = {
    
    contatti : {
        
        "Andrea" : "123456790",
        "Maria" :  "475533123",
        "Sandro" : "542357532",
        
    },
    
    stampaAgenda: function(){
        var lista = "";
        var indiceNuovo;
        for(let i=0;i<this.contatto.length;i++){
            indiceNuovo = i+1;
            lista = lista+" "+indiceNuovo+" - Nome: "+this.contatto[i].nome+"  Numero: "+this.contatto[i].numeroTelefono+"\n";
        }
        alert(lista);
    },

    stampaSingolo: function(indice){
        var contatto = "Nome: "+this.contatto[indice-1].nome+"  Numero: "+this.contatto[indice-1].numeroTelefono;
        alert(contatto);
    },

    eliminaContatto: function(indice){
        this.contatto.splice(indice-1, 1);
    },

    aggiungiContatto: function(nome, numeroTelefono){
        var nuovoContatto={
            nome: nome,
            numeroTelefono: numeroTelefono
        };
        this.contatto.push(nuovoContatto);
    },

    modificaContatto: function(indice){
        let nome = prompt("Inserisci nuovo nome");
        let numeroTelefono = parseInt(prompt("Inserisci nuovo numero"));
        this.contatto[indice-1].nome=nome;
        this.contatto[indice-1].numeroTelefono=numeroTelefono;
    }
}

let operazione = 1;

while(operazione>0){
    operazione = parseInt(prompt("1:Leggi agenda\n2:Leggi contatto\n3:Elimina contatto\n4:Aggiungi contatto\n5:Modifica contatto\n0:Esci"));
    if(operazione==1){
        agenda.stampaAgenda();
    }
    else if(operazione==2){
        let indice = parseInt(prompt("Inserisci indice contatto"));
        agenda.stampaSingolo(indice);
    }
    else if(operazione==3){
        let indice = parseInt(prompt("Inserisci indice contatto da eliminare"));
        agenda.eliminaContatto(indice);
    }
    else if(operazione==4){
        let nome = prompt("Inserisci nome");
        let numeroTelefono = parseInt(prompt("Inserisci numero"));
        agenda.aggiungiContatto(nome, numeroTelefono);
    }
    else if(operazione==5){
        let indice = parseInt(prompt("Inserisci indice contatto da modificare"));
        agenda.modificaContatto(indice);
    }
}