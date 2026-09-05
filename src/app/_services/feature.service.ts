import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../_models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private apiUrl = 'https://localhost:7173/api/Features';

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }

  getFeatureById(id: number): Observable<Feature> {
    return this.http.get<Feature>(`${this.apiUrl}/${id}`);
  }

  createFeature(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.apiUrl, feature);
  }

  updateFeature(feature: Feature): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${feature.featureId}`,
      feature
    );
  }

  deleteFeature(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
