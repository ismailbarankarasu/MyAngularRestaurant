import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes =
[
  {//Main route yapılandırması
  path:'', component: MainLayoutComponent,
  children: [
    { path:'about', component:AboutComponent},
    { path:'contact', component:ContactComponent},
    { path:'menu', component:MenuComponent}
  ]
},
//Admin route yapılandırması
{
  path:'admin', component:AdminLayoutComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
