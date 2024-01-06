import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvaliacoesRoutingModule } from './avaliacoes-routing.module';
import { CardAvaliacaoComponent } from './components/card-avaliacao/card-avaliacao.component';
import { ReviewsFirebaseStore } from './stores/reviews-firebase.store';
import { AvaliacoesComponent } from './views/avaliacoes/avaliacoes.component';

@NgModule({
	declarations: [AvaliacoesComponent, CardAvaliacaoComponent],
	imports: [CommonModule, AvaliacoesRoutingModule],
	providers: [ReviewsFirebaseStore],
})
export class AvaliacoesModule {}
