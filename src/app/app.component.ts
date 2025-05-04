import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusComponent } from './components/login-status/login-status.component'; // adjust path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-ecommerce';
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    LoginStatusComponent.authState.subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  navigateToAbout() {
    this.router.navigate(['/about-us']);
  }
}

