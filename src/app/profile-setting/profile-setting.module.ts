import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { ProfileSettingComponent } from './profile-setting.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileSettingComponent
  ],
  imports: [
    CommonModule,
    ProfileSettingRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class ProfileSettingModule { }
