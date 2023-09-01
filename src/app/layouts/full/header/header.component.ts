import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ConfirmationComponent } from 'src/app/material-component/dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ["./header.component.scss"],
})
export class AppHeaderComponent {
  role: any;
  tokenpayload:any = ""
  token:any = localStorage.getItem('token')
  constructor(private router: Router, private dialog: MatDialog) {
    this.tokenpayload = jwtDecode(this.token)

  }

  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout',
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (user: any) => {
        dialogRef.close();
        localStorage.clear();
        this.router.navigate(['/']);
      }
    );
  }

 
}
