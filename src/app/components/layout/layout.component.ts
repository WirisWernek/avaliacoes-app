import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	standalone: true,
	imports: [BottomNavComponent, NavbarComponent, RouterModule],
})
export class LayoutComponent {}
