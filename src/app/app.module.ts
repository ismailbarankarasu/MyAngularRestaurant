import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { FeatureComponent } from './feature/feature.component';
import { ServiceComponent } from './service/service.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';
import { AdminFeatureComponent } from './admin/admin-feature/admin-feature.component';
import { AdminServiceComponent } from './admin/admin-service/admin-service.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminReservationComponent } from './admin/admin-reservation/admin-reservation.component';
import { AdminContactInfoComponent } from './admin/admin-contact-info/admin-contact-info.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    CategoryComponent,
    AdminMenuComponent,
    FeatureComponent,
    ServiceComponent,
    ReservationComponent,
    FooterComponent,
    AdminFeatureComponent,
    AdminServiceComponent,
    AdminAboutComponent,
    AdminReservationComponent,
    AdminContactInfoComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
imports: [
  BrowserModule,
  CommonModule,
  AppRoutingModule,
  FormsModule
],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
