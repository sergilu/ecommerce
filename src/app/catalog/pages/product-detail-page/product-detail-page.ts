import { AddToCartWidget } from '@/app/cart/widgets/add-to-cart-widget/add-to-cart-widget';
import { FindCatalogProductUseCase } from '@/core/catalog/product/application/find-catalog-product-use-case';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.html',
  imports: [AddToCartWidget],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage {
  public readonly id = input.required<string>();

  protected readonly productResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.#useCase.execute(params.id),
  });

  readonly #useCase = inject(FindCatalogProductUseCase);
}
