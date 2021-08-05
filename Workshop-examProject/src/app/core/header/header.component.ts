import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ITheme } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  @Input()
  theme!: ITheme;

  hideNavigation = false;

  isReady$ = this.authService.isReady$
  isLogged$ = this.authService.isLogged$

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }

  ngOnDestroy(): void {
  }
}