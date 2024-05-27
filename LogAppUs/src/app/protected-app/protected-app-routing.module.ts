import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductsComponent } from './dashboard/components/list-products/list-products.component';
import { AddEditProductComponent } from './dashboard/components/add-edit-product/add-edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: ListProductsComponent },
      { path: 'add', component: AddEditProductComponent },
      { path: 'edit/:id', component: AddEditProductComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedAppRoutingModule { }

