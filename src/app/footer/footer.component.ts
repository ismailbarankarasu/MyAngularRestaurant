import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../_models/contact-info';
import { ContactInfoService } from '../_services/contact-info.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  contactInfo?: ContactInfo;

  constructor(private contactInfoService: ContactInfoService) { }

  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo(): void {
    this.contactInfoService.getContactInfos().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.contactInfo = data[0];
        }
      },
      error: (error) => {
        console.error(
          'İletişim bilgileri alınırken hata oluştu:',
          error
        );
      }
    });
  }
}
