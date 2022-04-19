import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {AuthService} from '@core/auth.service';
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'professional.component.html',
  styleUrls: ['professional.component.css'],
})
export class ProfessionalComponent {
  constructor( private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
