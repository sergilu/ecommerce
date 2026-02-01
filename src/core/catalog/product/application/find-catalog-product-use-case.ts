import { inject, Injectable } from '@angular/core';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';
import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FindCatalogProductUseCase {
  readonly repo = inject(CatalogProductRepository);

  execute(productId: string): Observable<CatalogProduct> {
    return this.repo.find(productId);
  }
}
