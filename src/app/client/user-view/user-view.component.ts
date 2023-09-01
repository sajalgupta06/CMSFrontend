import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductComponent } from 'src/app/material-component/dialog/product/product.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent implements OnInit {
 
  dataSource: any;

  constructor(
    private productService: ProductService,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  foodItem: any[] = [
    {
      "name": "pizza",
      "price": "299",
      "description": "this is delicous pizza",
      "img": "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80",
      "quantity": 1
    },
    {
      "name": "coke",
      "price": "99",
      "description": "this is delicous coke",
      "img": "",
      "quantity": 1
    },
    {
      "name": "pasta",
      "price": "499",
      "description": "this is delicous pasta",
      "img": "",
      "quantity": 1
    },
    {
      "name": "burger",
      "price": "159",
      "description": "this is delicous burger",
      "img": "",
      "quantity": 1
    }
  ]

  ngOnInit(): void {
    this.ngxService.start();
    this.foodItems()
  }

  foodItems(){
    this.productService.getProducts().subscribe(
      (res:any) => {
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(res);
        console.log("product table ****", this.dataSource);
      }
    )
  }

  quantity: number = 1;
  i = 0;

  increment(prod: any) {
    prod.quantity += 1;
  }

  decrement(prod: any) {
    if (prod.quantity > 0) {
      prod.quantity -= 1
    }
    else prod.quantity = 0;
  }

  public count = 0;
  public subtotal = 0;

  addCart(prod: any) {
    this.addCart(prod);
  }
}
