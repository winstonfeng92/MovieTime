import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePwComponent } from './username-pw.component';

describe('UsernamePwComponent', () => {
  let component: UsernamePwComponent;
  let fixture: ComponentFixture<UsernamePwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernamePwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernamePwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
