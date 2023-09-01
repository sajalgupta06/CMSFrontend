import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { UserViewComponent } from './user-view/user-view.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';

export const ClientRoutes: Routes = [{
  path: '',
  component: ClientComponent,
    children : [
      {
        path: ':id',
        component : UserViewComponent
      },
      {
        path: 'pastorders',
        component : PastOrdersComponent
      }
    ]
}];
