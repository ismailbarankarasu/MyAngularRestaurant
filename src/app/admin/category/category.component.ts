import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../_models/category';
import { CategoryService } from '../../_services/category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categoryList: CategoryModel[] = [];

  category: CategoryModel = new CategoryModel();

  editCategory: CategoryModel = new CategoryModel();

  successMessage = '';
  errorMessage = '';

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (values) => {
        this.categoryList = values;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Kategoriler alınırken bir hata oluştu.';
      }
    });
  }

  create(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.categoryService.create(this.category).subscribe({
      next: (value) => {
        this.categoryList.push(value);

        this.category = new CategoryModel();

        this.successMessage = 'Kategori başarıyla eklendi.';
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Kategori eklenirken bir hata oluştu.';
      }
    });
  }

  onSelected(category: CategoryModel): void {
    this.editCategory = { ...category };
    this.successMessage = '';
    this.errorMessage = '';
  }

  update(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.categoryService
      .update(this.editCategory.id, this.editCategory)
      .subscribe({
        next: () => {
          this.successMessage = 'Kategori başarıyla güncellendi.';
          this.getCategories();
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Kategori güncellenirken bir hata oluştu.';
        }
      });
  }

  delete(id: number): void {
    if (!confirm('Bu kategoriyi silmek istediğinize emin misiniz?')) {
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.categoryService.delete(id).subscribe({
      next: () => {
        this.successMessage = 'Kategori başarıyla silindi.';
        this.getCategories();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Kategori silinirken bir hata oluştu.';
      }
    });
  }
}
