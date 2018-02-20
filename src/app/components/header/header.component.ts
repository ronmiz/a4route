import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#" [routerLink]="['home']">iTunes Search App</a>
      <ul class="nav navbar-nav">
        <li class="nav-item active" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['home']" >Home</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" [routerLink]="['search']">Search</a>
        </li>
      </ul>
    </nav>
 `
})
export class HeaderComponent {
  
  constructor(private router: Router){}
 
  goHome() {
    this.router.navigate(['']); 
  }

  goSearch() {
    this.router.navigate(['search']); 
  }
}
