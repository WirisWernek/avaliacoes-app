import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [RouterModule]
})
export class AppComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		initFlowbite();
	}
}
