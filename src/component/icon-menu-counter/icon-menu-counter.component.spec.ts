import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuCounterComponent } from './icon-menu-counter.component';

describe('IconMenuCounterComponent', () => {
  let component: IconMenuCounterComponent;
  let fixture: ComponentFixture<IconMenuCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMenuCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconMenuCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
