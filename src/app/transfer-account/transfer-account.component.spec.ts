import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAccountComponent } from './transfer-account.component';

describe('TransferAccountComponent', () => {
  let component: TransferAccountComponent;
  let fixture: ComponentFixture<TransferAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
