import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../_services/menu.service';
import { CategoryService } from '../../_services/category.service';
import { ReservationService } from '../../_services/reservation.service';
import { ServiceService } from '../../_services/service.service';

import { MenuModel } from '../../_models/menu';
import { Reservation } from '../../_models/reservation';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  productCount = 0;
  categoryCount = 0;
  reservationCount = 0;
  serviceCount = 0;

  recentProducts: MenuModel[] = [];
  recentReservations: Reservation[] = [];

  isLoading = true;

  constructor(
    private menuService: MenuService,
    private categoryService: CategoryService,
    private reservationService: ReservationService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {

    this.menuService.getAll().subscribe({
      next: (menus) => {
        this.productCount = menus.length;

        this.recentProducts = [...menus]
          .sort((a, b) => b.id - a.id)
          .slice(0, 5);
      },
      error: (error) => {
        console.error('Ürünler alınamadı:', error);
      }
    });

    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categoryCount = categories.length;
      },
      error: (error) => {
        console.error('Kategoriler alınamadı:', error);
      }
    });

    this.reservationService.getReservations().subscribe({
      next: (reservations) => {
        this.reservationCount = reservations.length;

        this.recentReservations = [...reservations]
          .sort(
            (a, b) =>
              new Date(b.reservationDate).getTime() -
              new Date(a.reservationDate).getTime()
          )
          .slice(0, 5);
      },
      error: (error) => {
        console.error('Rezervasyonlar alınamadı:', error);
      }
    });

    this.serviceService.getServices().subscribe({
      next: (services) => {
        this.serviceCount = services.length;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Hizmetler alınamadı:', error);
        this.isLoading = false;
      }
    });

  }
}
