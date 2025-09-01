import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodorderingcomponentComponent } from './foodorderingcomponent.component';

describe('FoodorderingcomponentComponent', () => {
  let component: FoodorderingcomponentComponent;
  let fixture: ComponentFixture<FoodorderingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodorderingcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodorderingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
