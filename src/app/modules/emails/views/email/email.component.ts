import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailFirebaseStore } from '../../stores/email-firebase.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
	emails$: Observable<any[]>;

	constructor(private emailStore: EmailFirebaseStore) {
	  this.emails$ = emailStore.getData();
	}
}
