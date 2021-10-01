import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  showBanner: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return localStorage.getItem('Password') !== null;
  }

  logout() {
    localStorage.removeItem('Password');
    this.router.navigateByUrl('/');
  }
}
