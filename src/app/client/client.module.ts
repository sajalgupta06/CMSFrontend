import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routing';
import { MaterialModule } from '../shared/material-module';
import { UserViewComponent } from './user-view/user-view.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(ClientRoutes)
  ],
  declarations: [ClientComponent, UserViewComponent, PastOrdersComponent, CategoriesComponent, CheckoutComponent]
})
export class ClientModule { }
