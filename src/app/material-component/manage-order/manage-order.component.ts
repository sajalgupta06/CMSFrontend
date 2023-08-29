import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order-service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss'],
})
export class ManageOrderComponent implements OnInit {
  manageOrderForm: any = FormGroup;
  responseMessage: any;
  defaultStatus:any=""
  status:string[]=["ACCEPTED","COMPLETED","REJECTED"]
  displayedColumns: string[] = [
    'name',
    'orderedItems',
    'total',
    'paymentMethod',
    'orderStatus',
  ];
  dataSource: any= [];


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
    this.orderService.getOrders().subscribe(
      (resp: any) => {
        this.ngxService.stop();
       
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
