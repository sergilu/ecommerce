import { inject, Injectable } from '@angular/core';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';
import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';

@Injectable({
  providedIn: 'root',
})
export class FindCatalogProductUseCase {
  readonly repo = inject(CatalogProductRepository);

  execute(productId: string): Promise<CatalogProduct> {
    return this.repo.find(productId);
  }
}
