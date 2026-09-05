import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservation } from '../_models/reservation';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  reservation: Reservation = {
    reservationId: 0,
    name: '',
    email: '',
    reservationDate: '',
    personCount: 1,
    specialRequest: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private reservationService: ReservationService) { }

  createReservation(form: NgForm): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.reservationService.createReservation(this.reservation).subscribe({
      next: () => {
        this.successMessage = 'Rezervasyonunuz başarıyla oluşturuldu.';
        this.isSubmitting = false;

        form.resetForm({
          reservationId: 0,
          name: '',
          email: '',
          reservationDate: '',
          personCount: 1,
          specialRequest: ''
        });
      },
      error: (error) => {
        console.error('Rezervasyon oluşturulurken hata oluştu:', error);

        this.errorMessage =
          'Rezervasyon oluşturulurken bir hata oluştu. Lütfen bilgilerinizi kontrol edin.';

        this.isSubmitting = false;
      }
    });
  }
}
