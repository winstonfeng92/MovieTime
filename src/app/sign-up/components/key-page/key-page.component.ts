import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-key-page',
  templateUrl: './key-page.component.html',
  styleUrls: ['./key-page.component.scss']
})
export class KeyPageComponent {
  @Input() parentFormGroup!: FormGroup;

}
