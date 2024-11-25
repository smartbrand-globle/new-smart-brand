import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProcessHomeComponent } from './our-process-home.component';

describe('OurProcessHomeComponent', () => {
  let component: OurProcessHomeComponent;
  let fixture: ComponentFixture<OurProcessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProcessHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProcessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
