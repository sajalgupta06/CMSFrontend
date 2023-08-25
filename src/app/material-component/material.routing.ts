import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';




export const MaterialRoutes: Routes = [
    {
        path:'product',
        component: ManageProductComponent,
        canActivate:[RouteGuardServices],
        data:{
            expectedRole:['admin']
        }
    }
];
