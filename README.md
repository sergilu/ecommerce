🚧 UNDER CONSTRUCTION 🚧

# Enterprise Application Patterns Learning Playground

A comprehensive learning environment for practicing and testing enterprise application development concepts.

# Roadmap

- [x] **Server-Side Rendering**: Angular SSR implementation
- [x] **Hexagonal architecture**
- [ ] **Unit Testing**: Testing Library integration with Vitest
- [ ] **End-to-End Testing**: Playwright automation and testing

import { FindCatalogProductUseCase } from '@/core/catalog/product/application/find-catalog-product-use-case';
import { Component, inject, input, OnInit, resource } from '@angular/core';

@Component({
selector: 'app-product-detail-page',
templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
public readonly id = input.required<string>();

protected readonly productResource = resource({
params: () => ({ id: this.id() }),
loader: ({ params }) => this.#useCase.execute(params.id),
});

readonly #useCase = inject(FindCatalogProductUseCase);
}
