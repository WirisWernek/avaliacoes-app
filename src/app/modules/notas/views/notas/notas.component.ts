import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AnotacoesFirebaseStore } from '../../stores/anotacoes-firebase.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {
	anotacoes$: Observable<any[]>;

	constructor(private anotacoesStore: AnotacoesFirebaseStore) {
	  this.anotacoes$ = anotacoesStore.getData();
	}
}
