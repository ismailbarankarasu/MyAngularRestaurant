import { CategoryModel } from './../../_models/category';
import { CategoryService } from './../../_services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

    categoryList: CategoryModel[];
    constructor(private categoryService:CategoryService) {
    this.getCategories()
    }

    getCategories(){
      this.categoryService.getCategories().subscribe({
        next: values => this.categoryList = values,
        error: err => console.log(err)
      })
    }
}
