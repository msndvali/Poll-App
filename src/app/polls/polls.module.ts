import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollsRoutingModule } from './polls-routing.module';
import { PollsComponent } from './polls.component';

@NgModule({
  declarations: [
    PollsComponent
  ],
  imports: [
    PollsRoutingModule,
    CommonModule,
  ],
  exports: [
    CommonModule
  ]
})
export class PollsModule { }
