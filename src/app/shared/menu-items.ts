import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: 'ADMIN' },
  {
    state: 'category',
    name: 'Manage Categories',
    icon: 'category',
    role: 'ADMIN',
  },
  { state: 'product', name: 'Manage Products', icon: 'grass', role: 'ADMIN' },
  { state: 'order', name: 'Manage Orders', icon: 'list_alt', role: 'ADMIN' },
  { state: 'bill', name: 'View Bills', icon: 'money', role: 'ADMIN' },
  { state: 'user', name: 'Manage Users', icon: 'people', role: 'ADMIN' },
];

@Injectable()
export class MenuItems {
  getMenuItems(): Menu[] {
    return MENUITEMS;
  }
}
