import { Injectable } from '@angular/core';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';

@Injectable()
export class ApiCatalogProductRepository implements CatalogProductRepository {
  find(productId: string) {
    // TODO: Implement API call to fetch product details
    return Promise.resolve({
      id: productId,
      name: `Sample Product ${productId}`,
      description: 'This is a sample product description.',
      price: 99.99,
    });
  }
}
