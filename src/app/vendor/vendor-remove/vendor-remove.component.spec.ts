import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRemoveComponent } from './vendor-remove.component';

describe('VendorRemoveComponent', () => {
  let component: VendorRemoveComponent;
  let fixture: ComponentFixture<VendorRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
