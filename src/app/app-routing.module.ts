import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
const routes: Routes =
[
  {//Main route yapılandırması
  path:'', component: MainLayoutComponent,
  children: [

  ]
},
//Admin route yapılandırması
{
  path:'admin', component:AdminLayoutComponent,
  children: [
    {path:'category', component:CategoryComponent},
    {path:'menu', component:AdminMenuComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
