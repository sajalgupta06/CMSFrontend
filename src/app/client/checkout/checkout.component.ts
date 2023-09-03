import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CartService } from 'src/app/services/cart-service.service';
import { OrderService } from 'src/app/services/order-service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  selectedPaymentMethod:string=""
  responseMessage: any;
  address: any;
  displayedColumns: string[] = ['productName', 'productsPrice', 'productsCount', "productAmount"];
  constructor(
    public cartService:CartService,
    private router: Router,
    private orderService:OrderService,
    private snackBar: SnackbarService,
    private ngxService: NgxUiLoaderService

  ) { }

  ngOnInit(): void {
  }

  

placeOrder(){
var token:any = localStorage.getItem('token')
token = jwtDecode(token)

var userName = token.Name
var userId = token.Id
const data = {

  userName:userName,
  userId:userId,
  orderedItems:this.cartService.cart,
  total:this.cartService.total,
  paymentMethod:this.selectedPaymentMethod,
  createdAt: moment(),
  orderStatus:"ACCEPTED",
  address:this.address
}

console.log(data)

  this.orderService.placeOrder(data).subscribe(
    (resp: any) => {
      this.ngxService.stop();
      this.cartService.cart=[],
      this.cartService.total=0
      this.snackBar.openSnackBar(resp?.message, '');
     
      this.router.navigate(['/cafe/client']);

  
    },
    (error) => {
      this.ngxService.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {  
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackBar.openSnackBar(this.responseMessage, GlobalConstants.error);
    }
  )

}


}
