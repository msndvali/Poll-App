import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicPollsRoutingModule } from './public-polls-routing.module';
import { PublicPollsComponent } from './public-polls.component';

@NgModule({
  declarations: [
    PublicPollsComponent
  ],
  imports: [
    PublicPollsRoutingModule,
    CommonModule,
  ],
  exports: [
    CommonModule
  ]
})
export class PublicPollsModule { }
