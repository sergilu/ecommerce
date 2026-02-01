import { Button } from '@/app/shared/components/atoms/button/button';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  linkedSignal,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { tablerPlus, tablerMinus } from '@ng-icons/tabler-icons';

const DEFAULT_INITIAL_COUNT = 0;
const DEFAULT_STEP = 1;
const DEFAULT_MIN = 0;
const DEFAULT_MAX = null;
const DEFAULT_MAX_DISPLAYED_DIGITS = 2;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button, NgIcon],
  host: {
    class: 'counter',
    '[style.--max-displayed-digits]': 'maxDisplayedDigits',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Counter),
      multi: true,
    },
  ],
})
export class Counter implements ControlValueAccessor {
  readonly step = input<number>(DEFAULT_STEP);
  readonly min = input<number | null>(DEFAULT_MIN);
  readonly max = input<number | null>(DEFAULT_MAX);

  readonly value = model<number>(DEFAULT_INITIAL_COUNT);
  readonly disabled = model<boolean>(false);

  protected readonly maxDisplayedDigits = DEFAULT_MAX_DISPLAYED_DIGITS;

  protected readonly canDecrement = computed(() => {
    if (this.disabled()) {
      return false;
    }
    const min = this.min();
    return min !== null ? this.value() - this.step() >= min : true;
  });
  protected readonly canIncrement = computed(() => {
    if (this.disabled()) {
      return false;
    }
    const max = this.max();
    return max !== null ? this.value() + this.step() <= max : true;
  });

  protected readonly Icons = {
    plus: tablerPlus,
    minus: tablerMinus,
  };

  #onChange: (value: number) => void = () => {};
  #onTouched: () => void = () => {};

  writeValue(value: number): void {
    this.value.set(value);
  }
  registerOnChange(fn: (value: number) => void): void {
    this.#onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.#onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected handleIncrement() {
    if (!this.canIncrement()) {
      return;
    }
    const newValue = this.value() + this.step();
    this.value.set(newValue);
    this.#onChange(newValue);
    this.#onTouched();
  }

  protected handleDecrement() {
    if (!this.canDecrement()) {
      return;
    }
    const newValue = this.value() - this.step();
    this.value.set(newValue);
    this.#onChange(newValue);
    this.#onTouched();
  }
}
