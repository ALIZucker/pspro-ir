import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascketShowComponent } from './bascket-show.component';

describe('BascketShowComponent', () => {
  let component: BascketShowComponent;
  let fixture: ComponentFixture<BascketShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BascketShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BascketShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
