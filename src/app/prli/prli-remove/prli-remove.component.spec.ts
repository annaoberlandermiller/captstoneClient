import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrliRemoveComponent } from './prli-remove.component';

describe('PrliRemoveComponent', () => {
  let component: PrliRemoveComponent;
  let fixture: ComponentFixture<PrliRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrliRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrliRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
