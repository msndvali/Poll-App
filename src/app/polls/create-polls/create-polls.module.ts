import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePollsRoutingModule } from './create-polls-routing.module';
import { CreatePollsComponent } from './create-polls.component';

@NgModule({
  declarations: [
    CreatePollsComponent
  ],
  imports: [
    CreatePollsRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule
  ]
})
export class CreatePollsModule { }
