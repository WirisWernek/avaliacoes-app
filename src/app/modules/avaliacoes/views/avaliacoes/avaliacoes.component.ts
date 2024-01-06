import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewsFirebaseStore } from '../../stores/reviews-firebase.store';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent {
  avaliacoes$: Observable<any[]>;

  constructor(private reviewStore: ReviewsFirebaseStore) {
    this.avaliacoes$ = reviewStore.getData();
  }
}
