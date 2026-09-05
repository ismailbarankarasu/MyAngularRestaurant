import { Component, OnInit } from '@angular/core';
import { About } from '../../_models/about';
import { AboutService } from '../../_services/about.service';

@Component({
  selector: 'app-admin-about',
  standalone: false,
  templateUrl: './admin-about.component.html',
  styleUrl: './admin-about.component.css'
})
export class AdminAboutComponent implements OnInit {

  about: About = {
    id: 0,
    title: '',
    description: ''
  };

  isLoading = true;
  successMessage = '';
  errorMessage = '';

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbouts().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.about = { ...data[0] };
        }

        this.isLoading = false;
      },
      error: (error) => {
        console.error('About verisi alınamadı:', error);
        this.errorMessage = 'Hakkımızda bilgileri alınamadı.';
        this.isLoading = false;
      }
    });
  }

  saveAbout(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.about.id > 0) {
      this.aboutService.updateAbout(this.about).subscribe({
        next: () => {
          this.successMessage = 'Hakkımızda bilgileri başarıyla güncellendi.';
        },
        error: (error) => {
          console.error('About güncellenemedi:', error);
          this.errorMessage = 'Hakkımızda bilgileri güncellenemedi.';
        }
      });

      return;
    }

    this.aboutService.createAbout(this.about).subscribe({
      next: (createdAbout) => {
        this.about = createdAbout;
        this.successMessage = 'Hakkımızda bilgileri başarıyla oluşturuldu.';
      },
      error: (error) => {
        console.error('About oluşturulamadı:', error);
        this.errorMessage = 'Hakkımızda bilgileri oluşturulamadı.';
      }
    });
  }
}
