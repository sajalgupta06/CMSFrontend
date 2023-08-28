import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';
import jwt_decode from 'jwt-decode';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    public auth: AuthService,
    private router: Router,
    private snackBar: SnackbarService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = ["USER","ADMIN"];

    const token: string = localStorage.getItem('token')!;
    let tokenPayload: any;
    
    try {
      tokenPayload = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
    
    console.log(tokenPayload)
    let checkRole = false;

    for (let role of expectedRoleArray) {
      if (role === tokenPayload.Role) {
        checkRole = true;
      }
    }

    if (tokenPayload.Role === 'USER' || tokenPayload.Role === 'ADMIN') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;
      }
      
      this.snackBar.openSnackBar(
        GlobalConstants.unauthorized,
        GlobalConstants.error
      );

      this.router.navigate(['/']);
      return false;
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }

}
