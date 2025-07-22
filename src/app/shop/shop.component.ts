import { Component } from '@angular/core';
import { wine } from '../models/wine';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LOGoComponent } from "./logo/logo.component";

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule, RouterModule, LOGoComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  selectedType: string | null = null;
  minPrice: number | null = null;
  maxPrice: number | null = null;


  wines: wine[] = [
    {
      id: 1,
      name: 'საფერავი',
      type: 'შავი',
      year: 2020,
      price: 25,
      isAvailable: true,
      origin: 'კახეთი',
      img: "https://cgw.ge/wp-content/uploads/2022/12/saperavi-min.png"
    },
    {
      id: 2,
      name: 'რქაწითელი',
      type: 'თეთრი',
      year: 2021,
      price: 18,
      isAvailable: false,
      origin: 'კახეთი',
      img: "https://ktwshop.ge/598-large_default/%E1%83%A0%E1%83%A5%E1%83%90%E1%83%AC%E1%83%98%E1%83%97%E1%83%94%E1%83%9A%E1%83%98.jpg"
    },
    {
      id: 3,
      name: 'რქაწითელი როზე',
      type: 'წითელი',
      year: 2022,
      price: 27,
      isAvailable: false,
      origin: 'კახეთი',
      img: "https://ktwshop.ge/691-large_default/%E1%83%98%E1%83%90%E1%83%A1-%E1%83%95%E1%83%90%E1%83%A0%E1%83%93%E1%83%98.jpg"
    },
    {
      id: 4,
      name: 'ქისი',
      type: 'თეთრი',
      year: 2020,
      price: 22,
      isAvailable: true,
      origin: 'კახეთი',
      img: "https://cgw.ge/wp-content/uploads/2022/12/kisi-min.png"
    },
    {
      id: 5,
      name: 'ალუბლის მიქსი',
      type: 'წითელი',
      year: 2022,
      price: 32,
      isAvailable: false,
      origin: 'კახეთი',
      img: "https://8000vintages.ge/images/thumbnails/1200/1800/detailed/16/chigogidze_cherry_wine_nlnl.png"
    },
    {
      id: 6,
      name: 'რქაწითელი როზე',
      type: 'წითელი',
      year: 2022,
      price: 27,
      isAvailable: false,
      origin: 'კახეთი',
      img: "https://ktwshop.ge/691-large_default/%E1%83%98%E1%83%90%E1%83%A1-%E1%83%95%E1%83%90%E1%83%A0%E1%83%93%E1%83%98.jpg"
    },
    {
      id: 7,
      name: 'ცოლიკოური',
      type: 'თეთრი',
      year: 2021,
      price: 20,
      isAvailable: true,
      origin: 'იმერეთი',
      img: "https://ktwshop.ge/677-large_default/%E1%83%AA%E1%83%9D%E1%83%9A%E1%83%98%E1%83%99%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98.jpg"
    },
    {
      id: 8,
      name: 'მერანი',
      type: 'წითელი',
      year: 2020,
      price: 30,
      isAvailable: true,
      origin: 'სამეგრელო',
      img: "https://ktwshop.ge/509-home_default/%E1%83%A8%E1%83%90%E1%83%95%E1%83%99%E1%83%90%E1%83%9E%E1%83%98%E1%83%A2%E1%83%9D.jpg"
    },
    {
      id: 9,
      name: 'თელიანი ველი საფერავი',
      type: 'შავი',
      year: 2021,
      price: 35,
      isAvailable: true,
      origin: 'კახეთი',
      img: "https://alcorium-store.ge/images/detailed/3/%E1%83%97%E1%83%94%E1%83%9A%E1%83%98%E1%83%90%E1%83%9C%E1%83%98_%E1%83%95%E1%83%94%E1%83%9A%E1%83%98_%E1%83%A1%E1%83%90%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%95%E1%83%98_0.75%E1%83%9A.png"
    }
  ];

  get filteredWines(): wine[] {
    return this.wines.filter(wine => {
      const byType = !this.selectedType || wine.type === this.selectedType;
      const byMin = this.minPrice == null || wine.price! >= this.minPrice;
      const byMax = this.maxPrice == null || wine.price! <= this.maxPrice;

      return byType && byMin && byMax;
    });
  }

  setFilter(type: string | null) {
    this.selectedType = type;
  }

  setPriceFilter(price: number | null) {
    this.maxPrice = price;
  }

  constructor(private route: ActivatedRoute) { }

  wineId!: number;
  wine: any;
  ngOnInit(): void {
    this.wineId = Number(this.route.snapshot.paramMap.get('id'));
    this.wine = this.wines.find(w => w.id === this.wineId);
  }

}
