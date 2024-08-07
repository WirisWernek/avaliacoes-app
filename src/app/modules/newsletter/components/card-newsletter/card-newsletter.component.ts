import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-newsletter',
    templateUrl: './card-newsletter.component.html',
    styleUrls: ['./card-newsletter.component.scss'],
    standalone: true,
})
export class CardNewsletterComponent {
  @Input() inscrito: any;
}
