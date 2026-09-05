import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../_models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = 'https://localhost:7173/api/Abouts';

  constructor(private http: HttpClient) { }

  getAbouts(): Observable<About[]> {
    return this.http.get<About[]>(this.apiUrl);
  }

  getAboutById(id: number): Observable<About> {
    return this.http.get<About>(`${this.apiUrl}/${id}`);
  }

  createAbout(about: About): Observable<About> {
    return this.http.post<About>(this.apiUrl, about);
  }

  updateAbout(about: About): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${about.id}`,
      about
    );
  }

  deleteAbout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
