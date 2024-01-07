import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { AnotacoesFirebaseStore } from '../../stores/anotacoes-firebase.service';

@Component({
	selector: 'app-notas',
	templateUrl: './notas.component.html',
	styleUrls: ['./notas.component.scss'],
})
export class NotasComponent {
	anotacoes$: Observable<any[]>;

	constructor(private anotacoesStore: AnotacoesFirebaseStore, private titleService: TitleService) {
		this.anotacoes$ = anotacoesStore.getData();
		titleService.setTitle('Anotações Enviadas');
	}
}
