import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohanComponent } from './mohan.component';

describe('MohanComponent', () => {
  let component: MohanComponent;
  let fixture: ComponentFixture<MohanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MohanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
