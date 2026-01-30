import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./catalog/pages/product-detail-page/product-detail-page').then(
        (m) => m.ProductDetailPage,
      ),
  },
];
