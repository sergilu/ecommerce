import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type ButtonStyle = 'default' | 'ghost';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly label = input<string>();
  readonly variant = input<ButtonStyle>('default');
  readonly isIcon = input<boolean>(false);
  readonly isDisabled = input<boolean>(false);
  readonly isLoading = input<boolean>(false);

  onClick = output<void>();
}
