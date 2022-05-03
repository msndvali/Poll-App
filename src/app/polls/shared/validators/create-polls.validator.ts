import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { PollsModel } from "../models/poll.model";

@Injectable()
export class CreatePollsValidator {
  createPollsForm: FormGroup;

  createPollsValidator(polls: PollsModel) {
    this.createPollsForm = new FormGroup({
      question: new FormControl(polls.question),
      options: new FormArray([])
    });
    return this.createPollsForm;
  }

  get options(): FormArray {
    return this.createPollsForm.get('options') as FormArray;
  }

  setOptions() {
    for (let i = 0; i < 3; i++) {
      this.options.push(new FormControl(''));
    }
  }

  addOption() {
    this.options.push(new FormControl(''));
  }

  deleteOption(index: number) {
    this.options.removeAt(index);
  }
}
