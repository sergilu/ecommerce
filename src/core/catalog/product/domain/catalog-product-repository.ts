import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';

export abstract class CatalogProductRepository {
  abstract find(productId: string): Promise<CatalogProduct>;
}
