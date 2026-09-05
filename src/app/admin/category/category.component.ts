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
    category: CategoryModel = new CategoryModel();
    editCategory : any = {};
    constructor(private categoryService:CategoryService) {
    this.getCategories()
    }

    getCategories(){
      this.categoryService.getCategories().subscribe({
        next: values => this.categoryList = values,
        error: err => console.log(err)
      });
    }
    create(){
      this.categoryService.create(this.category).subscribe({
        next : value =>this.categoryList.push(value),
        error : err => console.log(err)
      });
    }
    onSelected(category: CategoryModel){
      this.editCategory = category;
    }
    update(){
      this.categoryService.update(this.editCategory.id, this.editCategory).subscribe({
        error : err => console.log(err)
      });
    }
    delete(id){
      this.categoryService.delete(id).subscribe({
        error: err => console.log(err),
        complete: () => this.getCategories()
      });
    }
}
