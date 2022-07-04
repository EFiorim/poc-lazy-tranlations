import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, SecondPageRoutingModule, TranslateModule],
})
export class SecondPageModule {}
