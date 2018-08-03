import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrReviewDetailComponent } from './pr-review-detail.component';

describe('PrReviewDetailComponent', () => {
  let component: PrReviewDetailComponent;
  let fixture: ComponentFixture<PrReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
