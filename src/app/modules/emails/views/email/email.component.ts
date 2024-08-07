import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/shared/services/title.service';
import { CardEmailComponent } from '../../components/card-email/card-email.component';
import { EmailFirebaseStore } from '../../stores/email-firebase.service';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss'],
	standalone: true,
	imports: [CardEmailComponent, AsyncPipe],
	providers: [EmailFirebaseStore],
})
export class EmailComponent {
	emails$: Observable<any[]>;

	constructor(private emailStore: EmailFirebaseStore, private titleService: TitleService) {
		this.emails$ = emailStore.getData();
		titleService.setTitle('Emails Enviadas');
	}
}
