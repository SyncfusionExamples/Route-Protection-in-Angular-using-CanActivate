import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'customer',
    component: CustomerHomeComponent
  },
  {
    path: 'guest',
    component: ContactUsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
