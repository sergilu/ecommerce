import { Button } from '@/app/shared/components/atoms/button/button';
import { NgIfContext } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
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
})
export class Counter {
  readonly initialCount = input<number>(DEFAULT_INITIAL_COUNT);
  readonly step = input<number>(DEFAULT_STEP);
  readonly min = input<number | null>(DEFAULT_MIN);
  readonly max = input<number | null>(DEFAULT_MAX);

  protected readonly maxDisplayedDigits = DEFAULT_MAX_DISPLAYED_DIGITS;

  protected readonly count = linkedSignal(() => this.initialCount());
  protected readonly canDecrement = computed(() => {
    const min = this.min();
    return min !== null ? this.count() - this.step() >= min : true;
  });
  protected readonly canIncrement = computed(() => {
    const max = this.max();
    return max !== null ? this.count() + this.step() <= max : true;
  });

  protected readonly Icons = {
    plus: tablerPlus,
    minus: tablerMinus,
  };

  handleIncrement() {
    this.count.update((current) => {
      if (!this.canIncrement()) {
        return current;
      }
      return current + this.step();
    });
  }

  handleDecrement() {
    this.count.update((current) => {
      if (!this.canDecrement()) {
        return current;
      }
      return current - this.step();
    });
  }
}
