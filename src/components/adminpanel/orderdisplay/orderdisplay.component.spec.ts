import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdisplayComponent } from './orderdisplay.component';

describe('OrderdisplayComponent', () => {
  let component: OrderdisplayComponent;
  let fixture: ComponentFixture<OrderdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
