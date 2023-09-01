import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  showCheckoutBar:boolean=true
  url:any=""
  constructor(
    public cartService:CartService,
    private route : ActivatedRoute,
    private router : Router

  ){
  

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.url = this.router.url
    
        this.url = this.url.split('/').pop();
     
         console.log(this.url)
         if(this.url=='checkout'|| this.url=="pastorders")
         {
          this.showCheckoutBar = false
          return;
         }
         this.showCheckoutBar=true
        /* Your code goes here on every router change */}
    });
  }

  ngOnInit(){
 
  }
 
}
