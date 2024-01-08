import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotasRoutingModule } from './notas-routing.module';
import { AnotacoesFirebaseStore } from './stores/anotacoes-firebase.service';
import { NotasComponent } from './views/notas/notas.component';
import { CardAnotacaoComponent } from './components/card-anotacao/card-anotacao.component';

@NgModule({
	declarations: [NotasComponent, CardAnotacaoComponent],
	imports: [CommonModule, NotasRoutingModule],
	providers: [AnotacoesFirebaseStore],
})
export class NotasModule {}
