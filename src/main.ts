import { importProvidersFrom, isDevMode } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment.development';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			ServiceWorkerModule.register('ngsw-worker.js', {
				enabled: !isDevMode(),
				// Register the ServiceWorker as soon as the application is stable
				// or after 30 seconds (whichever comes first).
				registrationStrategy: 'registerWhenStable:30000',
			})
		),
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideFirestore(() => getFirestore()),
		provideRouter(APP_ROUTES),
	],
}).catch((err) => console.error(err));
