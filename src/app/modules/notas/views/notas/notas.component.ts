import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/shared/services/title.service';
import { CardAnotacaoComponent } from '../../components/card-anotacao/card-anotacao.component';
import { AnotacoesFirebaseStore } from '../../stores/anotacoes-firebase.service';

@Component({
	selector: 'app-notas',
	templateUrl: './notas.component.html',
	styleUrls: ['./notas.component.scss'],
	standalone: true,
	imports: [CardAnotacaoComponent, AsyncPipe],
	providers: [AnotacoesFirebaseStore],
})
export class NotasComponent {
	anotacoes$: Observable<any[]>;

	constructor(private anotacoesStore: AnotacoesFirebaseStore, private titleService: TitleService) {
		this.anotacoes$ = anotacoesStore.getData();
		titleService.setTitle('Anotações Enviadas');
	}
}
