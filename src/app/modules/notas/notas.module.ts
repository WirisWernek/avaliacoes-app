import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './views/notas/notas.component';


@NgModule({
  declarations: [
    NotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule
  ]
})
export class NotasModule { }
