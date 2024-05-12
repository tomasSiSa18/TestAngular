import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrl: './receta-list.component.css'
})
export class RecetaListComponent implements OnInit{

  recetas: Array<Receta> = [];
  calPromedio = 0;
  textPromedio = "";
  opiniones = 0;

  constructor(private recetaService: RecetaService) {}

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe(apiRecetas => {

      this.recetas = apiRecetas;

      for(let i = 0; i < apiRecetas.length; i++){

        this.calPromedio += apiRecetas[i].estrellas;
        this.opiniones += apiRecetas[i].cantidadOpiniones;

      }

      this.calPromedio = this.calPromedio/apiRecetas.length;
      this.textPromedio = "La calificacion promedio es: " + this.calPromedio.toFixed(2) + " con " + this.opiniones + " opiniones."

    });
  }

  ngOnInit(): void {
    this.getRecetas();
  }

}
