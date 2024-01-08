import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacoesComponent } from './views/avaliacoes/avaliacoes.component';

const routes: Routes = [
	{
		path: "",
		component: AvaliacoesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacoesRoutingModule { }