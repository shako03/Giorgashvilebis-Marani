import { Routes } from '@angular/router';

export const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },

      {
            path: 'home',
            loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
      },

      {
            path: 'about',
            loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)

      },
      {
            path: 'shop',
            loadComponent: () => import('./shop/shop.component').then(c => c.ShopComponent)
      }

];
