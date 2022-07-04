import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SharedButtonComponent } from './shared-button/shared-button.component';

@NgModule({
  declarations: [SharedButtonComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SharedButtonComponent, TranslateModule],
})
export class SharedModule {}
