import {Component} from '@angular/core';
import {AuthService} from '@core/auth.service';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
   name: String;

  constructor( private authService: AuthService) {
    this.name = this.authService.getName().toUpperCase();
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

  isProfessional(): boolean {
    return this.authService.isProfessional();
  }

}
