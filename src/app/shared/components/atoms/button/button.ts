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
  readonly disabled = input<boolean>(false);
  readonly style = input<ButtonStyle>('default');
  readonly isIcon = input<boolean>(false);

  onClick = output<void>();
}
