import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedAppRoutingModule } from './protected-app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { ListProductsComponent } from './dashboard/components/list-products/list-products.component';
import { AddEditProductComponent } from './dashboard/components/add-edit-product/add-edit-product.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ProtectedAppRoutingModule
  ]
})
export class ProtectedAppModule { }
