import { Component, OnInit } from '@angular/core';
import { Service } from '../../_models/service';
import { ServiceService } from '../../_services/service.service';

@Component({
  selector: 'app-admin-service',
  standalone: false,
  templateUrl: './admin-service.component.html',
  styleUrl: './admin-service.component.css'
})
export class AdminServiceComponent implements OnInit {

  services: Service[] = [];

  service: Service = {
    serviceId: 0,
    title: '',
    description: '',
    icon: ''
  };

  isEditMode = false;

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
        console.error('Hizmetler alınamadı:', error);
      }
    });
  }

  saveService(): void {
    if (this.isEditMode) {
      this.serviceService.updateService(this.service).subscribe({
        next: () => {
          this.getServices();
          this.resetForm();
        },
        error: (error) => {
          console.error('Hizmet güncellenemedi:', error);
        }
      });

      return;
    }

    this.serviceService.createService(this.service).subscribe({
      next: () => {
        this.getServices();
        this.resetForm();
      },
      error: (error) => {
        console.error('Hizmet eklenemedi:', error);
      }
    });
  }

  editService(service: Service): void {
    this.service = { ...service };
    this.isEditMode = true;
  }

  deleteService(id: number): void {
    if (!confirm('Bu hizmeti silmek istediğinize emin misiniz?')) {
      return;
    }

    this.serviceService.deleteService(id).subscribe({
      next: () => {
        this.getServices();

        if (this.service.serviceId === id) {
          this.resetForm();
        }
      },
      error: (error) => {
        console.error('Hizmet silinemedi:', error);
      }
    });
  }

  resetForm(): void {
    this.service = {
      serviceId: 0,
      title: '',
      description: '',
      icon: ''
    };

    this.isEditMode = false;
  }
}
