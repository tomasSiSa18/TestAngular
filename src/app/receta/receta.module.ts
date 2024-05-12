import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';



@NgModule({
  declarations: [
    RecetaListComponent,
    RecetaDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecetaListComponent,
    RecetaDetailComponent
  ]
})
export class RecetaModule { }
