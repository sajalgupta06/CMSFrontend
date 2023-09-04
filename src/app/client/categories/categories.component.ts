import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
        if (this.category && this.category.length) {
          this.router.navigate(this.category[0])
          }
        console.log("Categoires Table ****", this.category);
      }
    )
  }

}
