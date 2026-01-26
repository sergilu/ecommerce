import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ec-button',
  template: `<button><ng-content></ng-content></button>`,
})
export class Button {}
