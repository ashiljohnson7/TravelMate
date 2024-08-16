import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSectionComponent } from './black-section.component';

describe('BlackSectionComponent', () => {
  let component: BlackSectionComponent;
  let fixture: ComponentFixture<BlackSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackSectionComponent]
    });
    fixture = TestBed.createComponent(BlackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
