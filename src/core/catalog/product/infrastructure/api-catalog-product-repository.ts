import { Injectable } from '@angular/core';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';
import { delay, Observable, of } from 'rxjs';
import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';

@Injectable()
export class ApiCatalogProductRepository implements CatalogProductRepository {
  find(productId: string): Observable<CatalogProduct> {
    // TODO: Implement API call to fetch product details
    return of({
      id: productId,
      name: `Sample Product ${productId}`,
      description: 'This is a sample product description.',
      price: { amount: 99.99, currency: 'EUR' },
      stock: 20,
    }).pipe(
      delay(1000), // Simulate network delay
    );
  }
}
