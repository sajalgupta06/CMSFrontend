import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order-service';
import * as moment from "moment";
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.scss']
})
export class PastOrdersComponent implements OnInit {

  manageOrderForm: any = FormGroup;
  responseMessage: any;
  defaultStatus:any=""
  status:string[]=["ACCEPTED","COMPLETED","REJECTED"]
  displayedColumns: string[] = [
    'name',
    'orderedItems',
    'total',
    'paymentMethod',
    'createdAt',
    'orderStatus',
    'address'
  ];
  dataSource: any= [];
  token:any="";

  constructor(
    private fb: FormBuilder,
    private orderService:OrderService,

    private ngxService: NgxUiLoaderService,
    private snackBar: SnackbarService
  ) {}


  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }



  tableData() {

    
  this.token = localStorage.getItem('token')
  this.token = jwtDecode(this.token)

    this.orderService.getOrdersById(this.token.Id).subscribe(
      (resp: any) => {
        this.ngxService.stop();

       
        for (let index = 0; index <  resp.length; index++) {
          resp[index].createdAt =  moment(resp[index].createdAt,"YYYY-MM-DDTHH:mm").format("DD-MMM-YYYY")

          
        }
     
        this.dataSource = new MatTableDataSource(resp);
        console.log(resp);
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
    );
  };

  updateStatus(id:number, status:string){
    this.ngxService.start();
    let data = {
      Id : id,
      OrderStatus:status
    }
    this.orderService.updateStatus(data).subscribe(
      (resp: any) => {
        this.ngxService.stop();
      
        this.snackBar.openSnackBar(resp.message, 'success');

       
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
    );
  }


}
