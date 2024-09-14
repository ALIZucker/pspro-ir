import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryKalaComponent } from './gallery-kala.component';

describe('GalleryKalaComponent', () => {
  let component: GalleryKalaComponent;
  let fixture: ComponentFixture<GalleryKalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryKalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryKalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
