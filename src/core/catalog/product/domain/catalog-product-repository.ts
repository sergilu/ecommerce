import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';
import { Observable } from 'rxjs';

export abstract class CatalogProductRepository {
  abstract find(productId: string): Observable<CatalogProduct>;
}
