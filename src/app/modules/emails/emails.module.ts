import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailFirebaseStore } from './stores/email-firebase.service';
import { EmailComponent } from './views/email/email.component';
import { CardEmailComponent } from './components/card-email/card-email.component';

@NgModule({
	declarations: [EmailComponent, CardEmailComponent],
	imports: [CommonModule, EmailsRoutingModule],
	providers: [EmailFirebaseStore],
})
export class EmailsModule {}
