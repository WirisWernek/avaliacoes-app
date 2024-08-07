import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-card-avaliacao',
    templateUrl: './card-avaliacao.component.html',
    styleUrls: ['./card-avaliacao.component.scss'],
    standalone: true,
    imports: [NgClass],
})
export class CardAvaliacaoComponent {
  @Input() avaliacao: any;
}
