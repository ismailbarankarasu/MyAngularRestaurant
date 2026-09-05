import { Component, OnInit } from '@angular/core';
import { Feature } from '../../_models/feature';
import { FeatureService } from '../../_services/feature.service';

@Component({
  selector: 'app-admin-feature',
  standalone: false,
  templateUrl: './admin-feature.component.html',
  styleUrl: './admin-feature.component.css'
})
export class AdminFeatureComponent implements OnInit {

  features: Feature[] = [];

  feature: Feature = {
    featureId: 0,
    title: '',
    description: '',
    imageUrl: '',
    buttonTitle: '',
    buttonUrl: ''
  };

  isEditMode = false;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.getFeatures();
  }

  getFeatures(): void {
    this.featureService.getFeatures().subscribe({
      next: (data) => {
        this.features = data;
      },
      error: (error) => {
        console.error('Feature verileri alınamadı:', error);
      }
    });
  }

  saveFeature(): void {
    if (this.isEditMode) {
      this.featureService.updateFeature(this.feature).subscribe({
        next: () => {
          this.getFeatures();
          this.resetForm();
        },
        error: (error) => {
          console.error('Feature güncellenemedi:', error);
        }
      });

      return;
    }

    this.featureService.createFeature(this.feature).subscribe({
      next: () => {
        this.getFeatures();
        this.resetForm();
      },
      error: (error) => {
        console.error('Feature eklenemedi:', error);
      }
    });
  }

  editFeature(feature: Feature): void {
    this.feature = { ...feature };
    this.isEditMode = true;
  }

  deleteFeature(id: number): void {
    if (!confirm('Bu kaydı silmek istediğinize emin misiniz?')) {
      return;
    }

    this.featureService.deleteFeature(id).subscribe({
      next: () => {
        this.getFeatures();

        if (this.feature.featureId === id) {
          this.resetForm();
        }
      },
      error: (error) => {
        console.error('Feature silinemedi:', error);
      }
    });
  }

  resetForm(): void {
    this.feature = {
      featureId: 0,
      title: '',
      description: '',
      imageUrl: '',
      buttonTitle: '',
      buttonUrl: ''
    };

    this.isEditMode = false;
  }
}
