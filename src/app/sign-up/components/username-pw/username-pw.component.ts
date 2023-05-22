import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

FormGroup
@Component({
  selector: 'app-username-pw',
  templateUrl: './username-pw.component.html',
  styleUrls: ['./username-pw.component.scss']
})
export class UsernamePwComponent {

  @Input() parentFormGroup!: FormGroup;

  constructor() { }


}
