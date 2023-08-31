import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { UserViewComponent } from './user-view/user-view.component';

export const ClientRoutes: Routes = [{
  path: '',
  component: ClientComponent,
    children : [
      {
        path: ':id',
        component : UserViewComponent
      }
    ]
}];
