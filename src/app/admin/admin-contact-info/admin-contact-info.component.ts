import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../../_models/contact-info';
import { ContactInfoService } from '../../_services/contact-info.service';

@Component({
  selector: 'app-admin-contact-info',
  standalone: false,
  templateUrl: './admin-contact-info.component.html',
  styleUrl: './admin-contact-info.component.css'
})
export class AdminContactInfoComponent implements OnInit {

  contactInfos: ContactInfo[] = [];

  contactInfo: ContactInfo = {
    contactInfoId: 0,
    address: '',
    phone: '',
    email: '',
    openingHours: ''
  };

  isEditMode = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private contactInfoService: ContactInfoService
  ) { }

  ngOnInit(): void {
    this.getContactInfos();
  }

  getContactInfos(): void {
    this.contactInfoService.getContactInfos().subscribe({
      next: (data) => {
        this.contactInfos = data;
      },
      error: (error) => {
        console.error('İletişim bilgileri alınamadı:', error);
        this.errorMessage = 'İletişim bilgileri alınamadı.';
      }
    });
  }

  saveContactInfo(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.isEditMode) {
      this.contactInfoService.updateContactInfo(this.contactInfo).subscribe({
        next: () => {
          this.successMessage = 'İletişim bilgileri başarıyla güncellendi.';
          this.getContactInfos();
          this.resetForm();
        },
        error: (error) => {
          console.error('İletişim bilgileri güncellenemedi:', error);
          this.errorMessage = 'İletişim bilgileri güncellenemedi.';
        }
      });

      return;
    }

    this.contactInfoService.createContactInfo(this.contactInfo).subscribe({
      next: () => {
        this.successMessage = 'İletişim bilgileri başarıyla oluşturuldu.';
        this.getContactInfos();
        this.resetForm();
      },
      error: (error) => {
        console.error('İletişim bilgileri oluşturulamadı:', error);
        this.errorMessage = 'İletişim bilgileri oluşturulamadı.';
      }
    });
  }

  editContactInfo(contactInfo: ContactInfo): void {
    this.contactInfo = { ...contactInfo };
    this.isEditMode = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  deleteContactInfo(id: number): void {
    if (!confirm('Bu iletişim kaydını silmek istediğinize emin misiniz?')) {
      return;
    }

    this.contactInfoService.deleteContactInfo(id).subscribe({
      next: () => {
        this.successMessage = 'İletişim bilgileri başarıyla silindi.';
        this.getContactInfos();

        if (this.contactInfo.contactInfoId === id) {
          this.resetForm();
        }
      },
      error: (error) => {
        console.error('İletişim bilgileri silinemedi:', error);
        this.errorMessage = 'İletişim bilgileri silinemedi.';
      }
    });
  }

  resetForm(): void {
    this.contactInfo = {
      contactInfoId: 0,
      address: '',
      phone: '',
      email: '',
      openingHours: ''
    };

    this.isEditMode = false;
  }
}
