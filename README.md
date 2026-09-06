# 🍽️ MyAngularRestaurant

Modern ve responsive bir restoran web uygulaması. Proje, Angular tabanlı kullanıcı arayüzü ile ASP.NET Core Web API backend'ini bir araya getirerek restoran içeriklerinin dinamik olarak yönetilebildiği bir yapı sunar.

## ✨ Özellikler

- Responsive restoran ana sayfası
- Dinamik öne çıkan alan (Feature)
- Hizmetler bölümü
- Hakkımızda bölümü
- Kategori bazlı dinamik menü ve ürünler
- Online rezervasyon formu
- Dinamik iletişim ve footer bilgileri
- Yönetim paneli ve dashboard
- Kategori CRUD işlemleri
- Menü / ürün CRUD işlemleri
- Feature, Service ve About yönetimi
- Rezervasyon yönetimi
- İletişim bilgileri yönetimi
- Kullanıcı kayıt ve giriş sistemi
- LocalStorage tabanlı oturum yönetimi
- AuthGuard ile yönetim paneli erişim kontrolü
- Giriş yapan kullanıcı bilgilerini görüntüleme
- Güvenli çıkış işlemi

## 🛠️ Kullanılan Teknolojiler

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons
- Font Awesome
- Angular Router
- Angular HttpClient
- Template-driven Forms
- RxJS
- SweetAlert2
- LocalStorage

## 🧩 Uygulama Yapısı

Proje kullanıcı arayüzü ve yönetim paneli olmak üzere iki temel bölümden oluşur.

### Kullanıcı Arayüzü

Ana sayfadaki Feature, Services, About, Menu, Reservation ve Contact alanları ayrı Angular component'leri olarak geliştirilmiştir. Veriler servisler üzerinden REST API'den alınır.

### Yönetim Paneli

Yönetim panelinde dashboard üzerinden sistem özeti görüntülenebilir. Kategoriler, ürünler, öne çıkan alan, hizmetler, hakkımızda, rezervasyonlar ve iletişim bilgileri ayrı yönetim ekranlarından kontrol edilebilir.

`/admin` rotası AuthGuard ile korunmaktadır. Oturum açmamış kullanıcılar giriş ekranına yönlendirilir.

## 🔐 Authentication

Projede case kapsamına uygun, sade bir authentication akışı bulunmaktadır.

- Register ile yeni kullanıcı oluşturma
- Login ile kullanıcı doğrulama
- Kullanıcı bilgisini LocalStorage'da saklama
- AuthGuard ile admin panelini koruma
- Logout ile oturumu sonlandırma

> Not: Bu authentication yapısı demo/case projesi kapsamında hazırlanmıştır ve token tabanlı production authentication sistemi değildir.

## 🔗 Backend

Frontend, ASP.NET Core Web API projesi ile HTTP üzerinden haberleşmektedir.

Backend repository:

https://github.com/ismailbarankarasu/MyAngularRestaurantServer

## 🚀 Kurulum

Repository'yi klonlayın:

```bash
git clone https://github.com/ismailbarankarasu/MyAngularRestaurant.git
cd MyAngularRestaurant
```

Bağımlılıkları yükleyin:

```bash
npm install
```

Uygulamayı çalıştırın:

```bash
ng serve
```

Tarayıcıdan aşağıdaki adrese gidin:

```text
http://localhost:4200
```

Uygulamanın verileri yükleyebilmesi için backend API'nin de çalışıyor olması gerekir.

## 🏗️ Production Build

```bash
ng build
```

Build çıktıları `dist/` dizininde oluşturulur.

## 📁 Öne Çıkan Angular Yapıları

```text
src/app/
├── _models/
├── _services/
├── guards/
├── auth/
│   ├── login/
│   └── register/
├── admin/
├── layouts/
│   ├── main-layout/
│   └── admin-layout/
├── feature/
├── service/
├── about/
├── menu/
├── reservation/
└── footer/
```

## 👨‍💻 Geliştirici

**İsmail Baran Karasu**

- GitHub: https://github.com/ismailbarankarasu
- LinkedIn: https://www.linkedin.com/in/ismail-baran-karasu/

## 📄 Proje Hakkında

Bu proje Angular, REST API entegrasyonu, component tabanlı frontend mimarisi, CRUD işlemleri, yönetim paneli ve temel authentication akışının birlikte uygulanması amacıyla geliştirilmiştir.
