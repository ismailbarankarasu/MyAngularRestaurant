import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { MenuService } from '../../_services/menu.service';
import { MenuModel } from '../../_models/menu';

import { CategoryService } from '../../_services/category.service';
import { CategoryModel } from '../../_models/category';

@Component({
  selector: 'app-admin-menu',
  standalone: false,
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent implements OnInit {

  menuList: MenuModel[] = [];
  categoryList: CategoryModel[] = [];

  menu: MenuModel = new MenuModel();
  editMenu: MenuModel = new MenuModel();

  errors: Record<string, string[]> = {};

  constructor(
    private menuService: MenuService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getCategories();
  }

  getAll(): void {
    this.menuService.getAll().subscribe({
      next: (values) => {
        this.menuList = values;
      },
      error: (err) => {
        console.error('Menü ürünleri alınamadı:', err);

        Swal.fire({
          title: 'Hata',
          text: 'Menü ürünleri alınırken bir hata oluştu.',
          icon: 'error'
        });
      }
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (values) => {
        this.categoryList = values;
      },
      error: (err) => {
        console.error('Kategoriler alınamadı:', err);
      }
    });
  }

  create(): void {
    this.errors = {};

    this.menuService.create(this.menu).subscribe({
      next: () => {
        this.menu = new MenuModel();

        this.getAll();

        Swal.fire({
          title: 'Ürün ekleme başarılı!',
          text: 'Ürün başarıyla kaydedildi.',
          icon: 'success'
        });
      },
      error: (err) => {
        this.handleValidationErrors(err);
      }
    });
  }

  onSelected(model: MenuModel): void {
    this.editMenu = { ...model };
    this.errors = {};
  }

  update(): void {
    this.errors = {};

    this.menuService
      .update(this.editMenu.id, this.editMenu)
      .subscribe({
        next: () => {
          this.getAll();

          Swal.fire({
            title: 'Güncelleme başarılı!',
            text: 'Ürün başarıyla güncellendi.',
            icon: 'success'
          });
        },
        error: (err) => {
          this.handleValidationErrors(err);
        }
      });
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      text: 'Bu işlemi geri alamazsınız!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, Sil!',
      cancelButtonText: 'İptal'
    }).then((result) => {

      if (!result.isConfirmed) {
        return;
      }

      this.menuService.delete(id).subscribe({
        next: () => {

          this.getAll();

          Swal.fire({
            title: 'Silme işlemi başarılı!',
            text: `${id} numaralı ürün silindi.`,
            icon: 'success'
          });

        },
        error: (err) => {

          console.error('Ürün silinemedi:', err);

          Swal.fire({
            title: 'Hata',
            text: 'Ürün silinirken bir hata oluştu.',
            icon: 'error'
          });

        }
      });

    });
  }

  private handleValidationErrors(err: any): void {
    if (err.status === 400 && err.error?.errors) {
      this.errors = err.error.errors;
      return;
    }

    console.error(err);

    Swal.fire({
      title: 'Hata',
      text: 'İşlem sırasında beklenmeyen bir hata oluştu.',
      icon: 'error'
    });
  }
}
