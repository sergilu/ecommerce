import { render, screen } from '@testing-library/angular';
import { describe, it, expect, beforeEach } from 'vitest';
import { ProductDetailPage } from '@/app/catalog/pages/product-detail-page/product-detail-page';
import { MockCatalogProductRepository } from '@/tests/core/catalog/product/infrastructure/mock-catalog-product-repository';
import { CatalogProductRepository } from '@/core/catalog/product/domain/catalog-product-repository';
import { FindCatalogProductUseCase } from '@/core/catalog/product/application/find-catalog-product-use-case';
import { CatalogProduct } from '@/core/catalog/product/domain/catalog-product';

describe('Product Detail Page', () => {
  let mockRepository: MockCatalogProductRepository;

  beforeEach(() => {
    mockRepository = new MockCatalogProductRepository();
  });

  it('should display product name when product is loaded', async () => {
    const productId = 'prod-123';

    const mockProduct: CatalogProduct = {
      id: productId,
      name: 'Test Product',
      description: 'A test product description',
      price: { amount: 49.99, currency: 'USD' },
      stock: 20,
    };

    mockRepository.shouldFind(mockProduct);

    const { fixture } = await render(ProductDetailPage, {
      providers: [
        { provide: CatalogProductRepository, useValue: mockRepository },
        FindCatalogProductUseCase,
      ],
      inputs: {
        id: productId,
      },
    });

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    mockRepository.assertFindCalledWith(productId);
  });
});
