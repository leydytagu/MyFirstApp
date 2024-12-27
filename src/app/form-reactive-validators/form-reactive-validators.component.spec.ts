import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveValidatorsComponent } from './form-reactive-validators.component';

describe('FormReactiveValidatorsComponent', () => {
  let component: FormReactiveValidatorsComponent;
  let fixture: ComponentFixture<FormReactiveValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormReactiveValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
