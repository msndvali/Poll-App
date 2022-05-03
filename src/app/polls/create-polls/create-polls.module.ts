import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePollsValidator } from '../shared/validators/create-polls.validator';
import { CreatePollsRoutingModule } from './create-polls-routing.module';
import { CreatePollsComponent } from './create-polls.component';
import { HttpClientModule } from '@angular/common/http'
import { CreatePollsService } from '../shared/services/create-polls.service';

@NgModule({
  declarations: [
    CreatePollsComponent
  ],
  imports: [
    CreatePollsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    CreatePollsValidator,
    CreatePollsService
  ]
})
export class CreatePollsModule { }
