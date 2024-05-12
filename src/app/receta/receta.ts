export class Receta {

    id: number;
    nombre: string;
    descripcion: string;
    dificultad: string;
    duracion: string;
    ingredientes: string;
    categoria: string;
    imagen: string;
    estrellas: number;
    cantidadOpiniones: number;
    autorReceta: string;

    constructor(idN: number, nombreN: string, descN: string, dificultadN: string, duracionN: string, ingredientesN: string, categoriaN: string, imagenN: string, estrellasN: number, cantidadOpinionesN: number, autorN: string) {
        this.id = idN;
        this.nombre = nombreN;
        this.descripcion = descN;
        this.dificultad = dificultadN;
        this.duracion = duracionN;
        this.ingredientes = ingredientesN;
        this.categoria = categoriaN;
        this.imagen = imagenN;
        this.estrellas = estrellasN;
        this.cantidadOpiniones = cantidadOpinionesN;
        this.autorReceta = autorN;
    }


}