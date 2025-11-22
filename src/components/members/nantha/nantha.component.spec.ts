import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanthaComponent } from './nantha.component';

describe('NanthaComponent', () => {
  let component: NanthaComponent;
  let fixture: ComponentFixture<NanthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NanthaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
