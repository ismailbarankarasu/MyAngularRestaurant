import { Component } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { CategoryModel } from '../_models/category';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  categories : CategoryModel[];
  selectedTab: number | null = null;
  constructor(private categoryService: CategoryService){
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategories().subscribe({
      next: values => this.categories =values,
      error : err =>console.log(err)
    })
  }

selectTab(tabId: number): void {
  this.selectedTab = tabId;

}
}
