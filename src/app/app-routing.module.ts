import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';

const routes: Routes = [{ path: 'products', component: ProductListComponent }, { path: 'product-form', component: ProductFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductListComponentModule, ProductsServiceModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
