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

 let expectedRoleArray: any = route.data;
    expectedRoleArray = expectedRoleArray.expectedRole;

    const token: string = localStorage.getItem('token')!;
    let tokenPayload: any;
    
    try {
      tokenPayload = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.snackBar.openSnackBar(
        GlobalConstants.unauthorized, 
        GlobalConstants.error
      );
      this.router.navigate(['/']);
    }
    
    let checkRole = false;

  
    if (expectedRoleArray[0] == tokenPayload.Role) {
      checkRole = true;
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
      this.snackBar.openSnackBar(
        GlobalConstants.unauthorized, 
        GlobalConstants.error
      );

      return false;
    }
  }

}
