import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service.service';
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
    public cartService : CartService,
    private route : ActivatedRoute,
    private router : Router
  ){
    this.route.params.subscribe((res)=>{
      this.product = res.id;
      this.foodItems(res.id);
    })
  }

  ngOnInit: any
  
   
  
  foodItems(id : any){
    this.productService.getProductsByCategory(id).subscribe(
    (resp: any) => {
      this.productList = resp;
      console.log("Product Table ********",this.productList)
    })
  }
 
 
  getProductCount(id:number){


    var itemCount =0;
     this.cartService.cart.forEach((item:any)=>{
      if(item.productsId==id)
      { 
        itemCount =  item.productsCount;
        return;
      }
    })

 
  
    this.productList.forEach((item:any)=>{
      if(item.id==id)
      {
        item.productsCount = itemCount
        return;
      }
    })
  }


  add(prod:any){

    this.cartService.addToCart(prod);
    this.getProductCount(prod.id)
    console.log(this.productList)
   

  }

  remove(prod:any)
  {
    this.cartService.removeFromCart(prod)
    this.getProductCount(prod.id)
    console.log(this.productList)
  }


}
