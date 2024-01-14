import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrls: ['./card-anotacao.component.scss']
})
export class CardAnotacaoComponent {
@Input() anotacao: any;
}
