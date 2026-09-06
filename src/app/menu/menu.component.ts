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
getCategoryIcon(categoryName: string): string {
  switch (categoryName.toLocaleLowerCase('tr-TR')) {

    case 'fast food':
      return 'fa-hamburger';

    case 'içecekler':
      return 'fa-glass-martini-alt';

    case 'ara sıcaklar':
      return 'fa-drumstick-bite';

    case 'çorbalar':
      return 'fa-utensil-spoon';

    case 'makarnalar':
      return 'fa-utensils';

    case 'tatlılar':
      return 'fa-birthday-cake';

    case 'salatalar':
      return 'fa-leaf';

    default:
      return 'fa-utensils';
  }
}
}
