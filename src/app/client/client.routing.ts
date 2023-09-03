import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { UserViewComponent } from './user-view/user-view.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const ClientRoutes: Routes = [{
  path: '',
  component: ClientComponent,
    children : [
      {
        path: '',
        component : CategoriesComponent,
        
      },
      {
        path: 'pastorders',
        component : PastOrdersComponent
      },
      {
        path: 'checkout',
        component : CheckoutComponent
      },
      {
        path: ':id',
        component : UserViewComponent
      },
   
    ]
}];
