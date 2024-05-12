import { Component, Input } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrl: './receta-detail.component.css'
})
export class RecetaDetailComponent {

  @Input() recetaDetail!: Receta;

}
