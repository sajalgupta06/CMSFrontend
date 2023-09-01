import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  product: any;
  productList : any = [];

  constructor(
    private productService : ProductService,
    private route : ActivatedRoute,
    private router : Router
  ){
    this.route.params.subscribe((res)=>{
      this.product = res.id;
      this.foodItems(res.id);
    })
  }

  ngOnInit(): void {
  }

  foodItems(id : any){
    this.productService.getProductsByCategory(id).subscribe(
    (resp: any) => {
      this.productList = resp;
      console.log("Product Table ********",this.productList)
    })
  }
 
  quantity = 0;

  increment(prod: any){
    this.quantity +=1;
  }
  decrement(prod: any){
    if(this.quantity>0){
      this.quantity -=1;
    }
    else this.quantity = 0;
  }
  addCart(prod: any){
    this.addCart(prod);
  }
}
