import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-email',
  templateUrl: './card-email.component.html',
  styleUrls: ['./card-email.component.scss']
})
export class CardEmailComponent {
	@Input() email: any;
}
