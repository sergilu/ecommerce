import { Counter } from '@/app/shared/components/molecules/counter/counter';
import { Button } from '@/app/shared/components/atoms/button/button';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface AddToCartForm {
  quantity: FormControl<number>;
}

@Component({
  selector: 'app-add-to-cart-widget',
  templateUrl: './add-to-cart-widget.html',
  imports: [Counter, Button, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartWidget {
  public readonly productId = input.required<string>();
  public readonly stock = input.required<number>();

  protected readonly min = 1;
  protected readonly initialQuantity = 1;
  protected readonly step = 1;

  protected addToCartForm = new FormGroup<AddToCartForm>({
    quantity: new FormControl(this.initialQuantity, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(this.min)],
    }),
  });

  protected handleAddToCart() {
    if (this.addToCartForm.valid) {
      const quantity = this.addToCartForm.value.quantity;
      // TODO: Logic to add the product to the cart
      console.log(`Adding product ${this.productId()} with quantity ${quantity} to the cart.`);
    }
  }
}
