import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {AuthService} from '@core/auth.service';
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'TPV';
  username = undefined;
  subs:Array<Subscription> = [];
  num;

  constructor(private dialog: MatDialog, private authService: AuthService,
              private cd:  ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout();
  }


  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  search(value): void {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      if (sub && !sub.closed)
        sub.unsubscribe();
    }
  }

}
