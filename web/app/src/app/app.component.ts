import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Simple SPA Test</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'design-system';
}
