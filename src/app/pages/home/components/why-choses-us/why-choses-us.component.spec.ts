import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChosesUsComponent } from './why-choses-us.component';

describe('WhyChosesUsComponent', () => {
  let component: WhyChosesUsComponent;
  let fixture: ComponentFixture<WhyChosesUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChosesUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyChosesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
