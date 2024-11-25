import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiseHomeComponent } from './our-servise-home.component';

describe('OurServiseHomeComponent', () => {
  let component: OurServiseHomeComponent;
  let fixture: ComponentFixture<OurServiseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServiseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurServiseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
