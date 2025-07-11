import { Routes } from '@angular/router';

export const routes: Routes = [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
             
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
      },

      {
            path: 'header',
            loadComponent: () => import('./header/header.component').then(c => c.HeaderComponent)
      },

      {
            path: 'footer',
            loadComponent: () => import('./footer/footer.component').then(c => c.FooterComponent)
      }

];
