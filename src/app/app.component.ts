import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

interface AvaliacaoModel {
  comentatop: string;
  nota: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    initFlowbite();
  }
}
