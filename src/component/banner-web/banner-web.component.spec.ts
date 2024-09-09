import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWebComponent } from './banner-web.component';

describe('BannerWebComponent', () => {
  let component: BannerWebComponent;
  let fixture: ComponentFixture<BannerWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
