import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  static authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  storage: Storage = sessionStorage;

  constructor(private cartService:CartService,private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        LoginStatusComponent.authState.next(this.isAuthenticated);
        this.getUserDetails();
      }
    );
  }
  
  getUserDetails() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
          const theEmail = res.email;
          const name=res.name as string;
          // now store the email in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
          this.storage.setItem('userFullName',JSON.stringify(name));
        }
      );
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuth.signOut();
  }

}
