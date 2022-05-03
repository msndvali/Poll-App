import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { PollsModel } from '../shared/models/poll.model';
import { CreatePollsService } from '../shared/services/create-polls.service';
import { CreatePollsValidator } from '../shared/validators/create-polls.validator';

@Component({
  selector: 'app-create-polls',
  templateUrl: './create-polls.component.html',
  styleUrls: ['./create-polls.component.scss']
})
export class CreatePollsComponent implements OnInit {
  createPollsForm: FormGroup;
  pollsModel: PollsModel = new PollsModel();

  constructor(
    private validator: CreatePollsValidator,
    private createPollsService: CreatePollsService
    ) { }

  ngOnInit(): void {
    this.createPollsForm = this.validator.createPollsValidator(this.pollsModel);
    this.validator.setOptions();
  }

  getOptionControls() {
    return (this.createPollsForm.get('options') as FormArray).controls;
  }

  addOption() {
    this.validator.addOption();
  }

  submit() {
    this.pollsModel = Object.assign(this.pollsModel, this.validator.createPollsForm.value);
    this.createPollsService.createPolls(this.pollsModel)
      .subscribe(res => {
        // done
      })
  }
}
