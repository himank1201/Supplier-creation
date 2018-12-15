import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySupplierComponent } from './verify-supplier.component';

describe('VerifySupplierComponent', () => {
  let component: VerifySupplierComponent;
  let fixture: ComponentFixture<VerifySupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifySupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
