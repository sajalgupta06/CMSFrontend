import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  responseMessage: any;
  data: any;
  category: any;
  // lst: string = "";

  constructor(
    private route : ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe(
      (resp: any) => {
        this.category=resp;
        console.log("Categoires Table ****", this.category);
      }
    )
  }
 
}
