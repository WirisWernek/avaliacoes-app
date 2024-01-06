import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewsFirebaseService } from 'src/app/shared/services/reviews-firebase.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent {
  avaliacoes$: Observable<any[]>;

  constructor(private reviewService: ReviewsFirebaseService) {
    this.avaliacoes$ = reviewService.getData();
  }
}
