import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
list = [
  {
    number: '1',
    name: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    number: '2',
    name: 'Products',
    icon: 'fa-solid fa-chart-line',
  },
  {
    number: '3',
    name: 'Order',
    icon: 'fa-solid fa-box',
  },
  {
    number: '4',
    name: 'Analytics',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    number: '5',
    name: 'Settings',
    icon: 'fa-solid fa-gear',
  },
  {
    number: '6',
    name: 'About',
    icon: 'fa-solid fa-circle-info',
  },
  {
    number: '7',
    name: 'Contact',
    icon: 'fa-solid fa-phone',
  },
];
navigate(item: any): void {
  console.log('Navigating to:', item.name);
  // Add your actual navigation logic here, e.g., using Angular Router to navigate to a different route.
}
constructor(){

}
ngOnInit(): void {
    
}
}
