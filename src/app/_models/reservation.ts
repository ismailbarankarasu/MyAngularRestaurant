export interface Reservation {
  reservationId: number;
  name: string;
  email: string;
  reservationDate: string;
  personCount: number;
  specialRequest?: string;
}
