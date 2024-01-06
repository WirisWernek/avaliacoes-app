import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-avaliacao',
  templateUrl: './card-avaliacao.component.html',
  styleUrls: ['./card-avaliacao.component.scss'],
})
export class CardAvaliacaoComponent {
  @Input() avaliacao: any;
}
