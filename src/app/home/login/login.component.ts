import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '@core/auth.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobile: number;
  password: string;

  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
  }

  login(): void {
    this.auth.login(this.mobile, this.password).subscribe(
      () => {
        if (this.auth.untilOperator()) {
          this.router.navigate(['shop']).then().finally(() => this.dialog.closeAll());
        } else {

          this.dialog.closeAll();
        }
      }
    );
  }
}
