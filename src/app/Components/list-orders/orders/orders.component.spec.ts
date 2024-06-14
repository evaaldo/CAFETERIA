import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrdersComponent } from './orders.component';

describe('HeaderOrdersComponent', () => {
  let component: HeaderOrdersComponent;
  let fixture: ComponentFixture<HeaderOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
