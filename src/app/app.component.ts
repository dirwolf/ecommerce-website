import {  Component, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig],
})

export class AppComponent  {
  title = 'ecommerce';
  sideNavStatus: boolean = false;
  currentRate = 8;
  constructor(){}
}
