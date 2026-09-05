import { Component, OnInit } from '@angular/core';
import { Feature } from '../_models/feature';
import { FeatureService } from '../_services/feature.service';

@Component({
  selector: 'app-feature',
  standalone: false,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent implements OnInit {

  feature?: Feature;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.getFeature();
  }

  getFeature(): void {
    this.featureService.getFeatures().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.feature = data[0];
        }
      },
      error: (error) => {
        console.error('Feature verileri alınırken hata oluştu:', error);
      }
    });
  }
}
