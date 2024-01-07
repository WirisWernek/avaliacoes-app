import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	title = '';
	constructor(private titleService: TitleService) {}

	ngOnInit() {
		this.titleService.getTitle().subscribe((x) => (this.title = x));
	}
}
