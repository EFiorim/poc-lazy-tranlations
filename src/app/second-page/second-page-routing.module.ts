import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPageRoutingModule {}
