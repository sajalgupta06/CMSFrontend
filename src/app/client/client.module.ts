import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routing';
import { MaterialModule } from '../shared/material-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(ClientRoutes)
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
