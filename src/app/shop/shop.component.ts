import { Component } from '@angular/core';
import { wine } from '../models/wine';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  wines: wine[] = [
    {
      id: 1,
      name: 'საფერავი',
      type: 'წითელი',
      year: 2020,
      price: 25,
      isAvailable: true,
      origin: 'კახეთი',
      img:"https://cgw.ge/wp-content/uploads/2022/12/saperavi-min.png"
    },
    {
      id: 2,
      name: 'რქაწითელი',
      type: 'თეთრი',
      year: 2021,
      price: 18,
      isAvailable: false,
      origin: 'კახეთი',
      img:"https://ktwshop.ge/598-large_default/%E1%83%A0%E1%83%A5%E1%83%90%E1%83%AC%E1%83%98%E1%83%97%E1%83%94%E1%83%9A%E1%83%98.jpg"
    },
    {
      id: 3,
      name: 'რქაწითელი როზე',
      type: 'წითელი',
      year: 2022,
      price: 27,
      isAvailable: false,
      origin: 'კახეთი',
      img:"https://ktwshop.ge/691-large_default/%E1%83%98%E1%83%90%E1%83%A1-%E1%83%95%E1%83%90%E1%83%A0%E1%83%93%E1%83%98.jpg"
    },
    {
      id: 4,
      name: 'ქისი',
      type: 'თეთრი',
      year: 2020,
      price: 22,
      isAvailable: true,
      origin: 'კახეთი',
      img:"https://cgw.ge/wp-content/uploads/2022/12/kisi-min.png"
    },
    {
      id: 5,
      name: 'ალუბლის მიქსი',
      type: 'წითელი',
      year: 2022,
      price: 32,
      isAvailable: false,
      origin: 'კახეთი',
      img:"https://8000vintages.ge/images/thumbnails/1200/1800/detailed/16/chigogidze_cherry_wine_nlnl.png"
    },
    {
      id: 3,
      name: 'რქაწითელი როზე',
      type: 'წითელი',
      year: 2022,
      price: 27,
      isAvailable: false,
      origin: 'კახეთი',
      img:"https://ktwshop.ge/691-large_default/%E1%83%98%E1%83%90%E1%83%A1-%E1%83%95%E1%83%90%E1%83%A0%E1%83%93%E1%83%98.jpg"
    }

  ];


}
