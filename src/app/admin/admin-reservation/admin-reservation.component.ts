import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../_models/reservation';
import { ReservationService } from '../../_services/reservation.service';

@Component({
  selector: 'app-admin-reservation',
  standalone: false,
  templateUrl: './admin-reservation.component.html',
  styleUrl: './admin-reservation.component.css'
})
export class AdminReservationComponent implements OnInit {

  reservations: Reservation[] = [];

  reservation: Reservation = {
    reservationId: 0,
    name: '',
    email: '',
    reservationDate: '',
    personCount: 1,
    specialRequest: ''
  };

  isEditMode = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe({
      next: (data) => {
        this.reservations = data;
      },
      error: (error) => {
        console.error('Rezervasyonlar alınamadı:', error);
        this.errorMessage = 'Rezervasyonlar alınamadı.';
      }
    });
  }

  editReservation(reservation: Reservation): void {
    this.reservation = { ...reservation };
    this.isEditMode = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  updateReservation(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.reservationService.updateReservation(this.reservation).subscribe({
      next: () => {
        this.successMessage = 'Rezervasyon başarıyla güncellendi.';
        this.getReservations();
        this.resetForm();
      },
      error: (error) => {
        console.error('Rezervasyon güncellenemedi:', error);
        this.errorMessage = 'Rezervasyon güncellenemedi.';
      }
    });
  }

  deleteReservation(id: number): void {
    if (!confirm('Bu rezervasyonu silmek istediğinize emin misiniz?')) {
      return;
    }

    this.reservationService.deleteReservation(id).subscribe({
      next: () => {
        this.successMessage = 'Rezervasyon başarıyla silindi.';
        this.getReservations();

        if (this.reservation.reservationId === id) {
          this.resetForm();
        }
      },
      error: (error) => {
        console.error('Rezervasyon silinemedi:', error);
        this.errorMessage = 'Rezervasyon silinemedi.';
      }
    });
  }

  resetForm(): void {
    this.reservation = {
      reservationId: 0,
      name: '',
      email: '',
      reservationDate: '',
      personCount: 1,
      specialRequest: ''
    };

    this.isEditMode = false;
  }
}
