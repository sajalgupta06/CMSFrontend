import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
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




