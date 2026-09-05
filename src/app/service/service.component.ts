import { Component, OnInit } from '@angular/core';
import { Service } from '../_models/service';
import { ServiceService } from '../_services/service.service';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {

  services: Service[] = [];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (error) => {
        console.error('Hizmetler alınırken hata oluştu:', error);
      }
    });
  }
}
