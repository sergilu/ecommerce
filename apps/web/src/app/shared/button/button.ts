import { Component, output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  styleUrl: './button.scss',
  template: `<button (click)="onClick.emit($event)">
    <ng-content></ng-content>
  </button>`,
})
export class Button {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = output<PointerEvent>();
}
