import { Component } from '@angular/core';

@Component({
  selector: 'fl-root',
  template: `
    <fl-counter></fl-counter>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'counter';
}
