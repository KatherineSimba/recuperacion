class Edificio {
    constructor(pisos = 20, apartamento = 10) {
        this.pisos = pisos
        this.apartamento = apartamento
    }
    Inquilinos() {
        var inquilinos = Math.floor(Math.random() * this.apartamento)
        if (inquilinos < 1) {
            return "No hay inquilinos"
        } else {
            return inquilinos 
        }
    }
    Apartamento() {
        for (let apartament = 1; apartament <= this.apartamento; apartament++) {
            console.log("El apartamento "+apartament+" tiene "+edificio.Inquilinos()+ " inquilinos")
        }
    }
    Pisos(){
        let suma=edificio.Inquilinos()*edificio.apartamento*edificio.pisos
        for (let pisos = 1; pisos <= this.pisos; pisos++) {
            console.log("En el piso: " + pisos +"\n"+ edificio.Apartamento())
        }
        console.log(suma)
    }
}



let edificio = new Edificio()