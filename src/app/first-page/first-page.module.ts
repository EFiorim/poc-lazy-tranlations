import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FirstPageRoutingModule, SharedModule],
})
export class FirstPageModule {}
