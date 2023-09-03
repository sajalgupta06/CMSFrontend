import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:any=[];
total:any=0;
constructor(private http: HttpClient) {}


removeByAttr = function(arr:any, attr:any, value:any){
  var i = arr.length;
  while(i--){
     if( arr[i] 
         && arr[i].hasOwnProperty(attr) 
         && (arguments.length > 2 && arr[i][attr] === value ) ){ 

         arr.splice(i,1);

     }
  }
  return arr;
}


addToCart(product:any){

  if(this.cart.length==0)
  {
    this.cart.push(
      {
        productsId:product.id,
        productName:product.name,
        productsPrice : product.price,
        productsCount:1,
        productImage : product.image
      }
    )
  }
  else{
    var pushed = false;
    this.cart.forEach((prod:any)=>{
      if(prod.productsId==product.id)
      {
        pushed=true;
        prod.productsCount+=1;
      }
    })

    if(pushed==false)
    {
      this.cart.push(
        {
          productsId:product.id,
          productName:product.name,
          productsPrice : product.price,
          productsCount:1
        }
      )
    }

  }

  this.calculateTotal()

}
removeFromCart(product:any){

  if(this.cart.length==0)
  {
    return
  }
  else{
    var removed = false;
    this.cart.forEach((prod:any)=>{
      if(prod.productsId==product.id)
      {
        removed=true;
        console.log(prod.productsCount)
        if(prod.productsCount==1)
        { 
          this.removeByAttr(this.cart, 'productsId', prod.productsId);

          this.cart.filter((item:any)=>item.productsId!=product.id)
          this.calculateTotal()
          return;
        }
        prod.productsCount-=1;
      }
    })

   

  }

  this.calculateTotal()

}


calculateTotal(){
  var temp=0;
  this.cart.forEach((item:any)=>{
    temp += item.productsPrice*item.productsCount
  })
  this.total  = temp;
return this.total
}

}
