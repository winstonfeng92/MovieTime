import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.scss']
})
export class PlanPageComponent {
  @Input() parentFormGroup!: FormGroup;

}
