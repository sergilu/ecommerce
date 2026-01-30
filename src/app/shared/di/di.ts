import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';
import { ApiCatalogProductRepository } from '@/core/catalog/product/infrastructure/api-catalog-product-repository';
import { Provider } from '@angular/core';

export const di: Provider[] = [
  {
    provide: CatalogProductRepository,
    useClass: ApiCatalogProductRepository,
  },
];
