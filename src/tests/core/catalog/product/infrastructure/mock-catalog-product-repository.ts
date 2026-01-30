import { vi } from 'vitest';
import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';

export class MockCatalogProductRepository implements CatalogProductRepository {
  readonly #mockFind = vi.fn<CatalogProductRepository['find']>();

  async find(productId: string): Promise<CatalogProduct> {
    return this.#mockFind(productId);
  }

  shouldFind(product: CatalogProduct): void {
    this.#mockFind.mockResolvedValueOnce(product);
  }

  assertFindCalledWith(productId: string): void {
    expect(this.#mockFind).toHaveBeenCalledWith(productId);
  }
}
