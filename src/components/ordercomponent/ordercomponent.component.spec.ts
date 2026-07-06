/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdercomponentComponent } from './ordercomponent.component';
import { OrderStorageService } from '../../services/orderstorage.service';
import { of } from 'rxjs';
import { FoodOrderService } from '../../services/order.service';

declare const jasmine: any;

describe('OrdercomponentComponent', () => {
  let component: OrdercomponentComponent;
  let fixture: ComponentFixture<OrdercomponentComponent>;

  // ✅ Mock API Service
  const mockOrderService = {
    createOrder: jasmine.createSpy('createOrder').and.returnValue(
      of({ orderId: 'ORD123', orderTime: '2026-05-02' })
    )
  };

  // ✅ Mock Storage Service
  const mockStorageService = {
    getOrder: () => [],
    clearOrder: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdercomponentComponent],
      providers: [
        { provide: FoodOrderService, useValue: mockOrderService },
        { provide: OrderStorageService, useValue: mockStorageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});