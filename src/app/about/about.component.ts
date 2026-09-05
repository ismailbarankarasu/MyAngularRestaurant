import { Component, OnInit } from '@angular/core';
import { About } from '../_models/about';
import { AboutService } from '../_services/about.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  about?: About;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbouts().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.about = data[0];
        }
      },
      error: (error) => {
        console.error('Hakkımızda bilgileri alınırken hata oluştu:', error);
      }
    });
  }
}
