import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { ReviewsFirebaseStore } from '../../stores/reviews-firebase.store';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent {
  avaliacoes$: Observable<any[]>;

  constructor(private reviewStore: ReviewsFirebaseStore, private titleService: TitleService) {
    this.avaliacoes$ = reviewStore.getData();
	titleService.setTitle('Avaliações');
  }
}
