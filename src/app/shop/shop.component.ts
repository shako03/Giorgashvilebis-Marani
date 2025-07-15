import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  wines: any[] = [
    {
      id: 1,
      name: 'საფერავი',
      type: 'წითელი',
      year: 2020,
      price: 25,
      isAvailable: true,
      origin: 'კახეთი'
    },
    {
      id: 2,
      name: 'რქაწითელი',
      type: 'თეთრი',
      year: 2021,
      price: 18,
      isAvailable: false,
      origin: 'იმერეთი'
    }
    
  ];


}
