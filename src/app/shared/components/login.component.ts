import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '@core/auth.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  selector: 'app-login'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  login(): void {
    this.auth.login(this.email, this.password).subscribe(
      () => {
        if (this.auth.isProfessional() || this.auth.isAdmin()) {
          this.router.navigate(['professional']);
        }
      }
    );
  }
}
