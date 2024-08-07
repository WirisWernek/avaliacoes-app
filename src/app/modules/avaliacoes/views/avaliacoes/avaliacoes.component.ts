import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { TitleService } from 'src/app/shared/services/title.service';
import { CardAvaliacaoComponent } from '../../components/card-avaliacao/card-avaliacao.component';
import { ReviewsFirebaseStore } from '../../stores/reviews-firebase.store';

@Component({
	selector: 'app-avaliacoes',
	templateUrl: './avaliacoes.component.html',
	styleUrls: ['./avaliacoes.component.scss'],
	standalone: true,
	imports: [CardAvaliacaoComponent, AsyncPipe],
	providers: [ReviewsFirebaseStore],
})
export class AvaliacoesComponent {
	avaliacoes$: Observable<any[]>;

	constructor(private reviewStore: ReviewsFirebaseStore, private titleService: TitleService) {
		this.avaliacoes$ = reviewStore.getData();
		titleService.setTitle('Avaliações');
	}
}
