import {Component} from '@angular/core';
import {AuthService} from '@core/auth.service';


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
