import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollPageRoutingModule } from './poll-page-routing.module';
import { PollPageComponent } from './poll-page.component';

@NgModule({
  declarations: [
    PollPageComponent
  ],
  imports: [
    PollPageRoutingModule,
    CommonModule,
  ],
  exports: [
    CommonModule
  ]
})
export class PollPageModule { }
