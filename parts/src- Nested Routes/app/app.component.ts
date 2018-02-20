import { Component } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';

@Component({
  selector: 'app',
  template: `
	<app-header></app-header>
	<div class="m-t-1">
    <router-outlet></router-outlet>
  </div>
 `
})
export class AppComponent {
}