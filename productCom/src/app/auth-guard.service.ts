import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = sessionStorage.getItem('userToken') == null ? false : true;
    if (isLoggedIn) {
      if (state.url === '/products') {
      } else if (state.url === '/') {
        this.router.navigate(['products']);
      }
    } else {
      if (state.url === '/products') {
        this.router.navigate(['/']);
      } else if (state.url === '/') {
      }
    }
    return true;
  }
}
