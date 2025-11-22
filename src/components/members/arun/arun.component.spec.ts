import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArunComponent } from './arun.component';

describe('ArunComponent', () => {
  let component: ArunComponent;
  let fixture: ComponentFixture<ArunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
