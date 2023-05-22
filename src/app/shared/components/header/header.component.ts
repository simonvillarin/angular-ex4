import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  add = () => {
    this.router.navigate([`${this.router.url}/form`]);
  };

  deleteAll = () => {
    this.router.navigate([`${this.router.url}/form`]);
  };
}
