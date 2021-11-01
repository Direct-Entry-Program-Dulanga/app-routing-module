import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageCustomersComponent} from "./manage-customers/manage-customers.component";
import {ManageItemsComponent} from "./manage-items/manage-items.component";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {SearchOrdersComponent} from "./search-orders/search-orders.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'manage-customer',
    component: ManageCustomersComponent
  },
  {
    path: 'manage-item',
    component: ManageItemsComponent
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent
  },
  {
    path: 'search-order',
    component: SearchOrdersComponent
  },
  {
    path: '',
    redirectTo: '/dashboard'
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
