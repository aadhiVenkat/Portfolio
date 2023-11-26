import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcboutComponent } from './acbout.component';

describe('AcboutComponent', () => {
  let component: AcboutComponent;
  let fixture: ComponentFixture<AcboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcboutComponent]
    });
    fixture = TestBed.createComponent(AcboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
