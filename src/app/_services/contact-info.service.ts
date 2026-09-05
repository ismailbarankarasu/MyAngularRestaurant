import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInfo } from '../_models/contact-info';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  private apiUrl = 'https://localhost:7173/api/ContactInfos';

  constructor(private http: HttpClient) { }

  getContactInfos(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(this.apiUrl);
  }

  getContactInfoById(id: number): Observable<ContactInfo> {
    return this.http.get<ContactInfo>(`${this.apiUrl}/${id}`);
  }

  createContactInfo(contactInfo: ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>(this.apiUrl, contactInfo);
  }

  updateContactInfo(contactInfo: ContactInfo): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${contactInfo.contactInfoId}`,
      contactInfo
    );
  }

  deleteContactInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
