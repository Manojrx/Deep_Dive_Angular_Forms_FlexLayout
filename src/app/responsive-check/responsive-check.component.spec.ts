import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCheckComponent } from './responsive-check.component';

describe('ResponsiveCheckComponent', () => {
  let component: ResponsiveCheckComponent;
  let fixture: ComponentFixture<ResponsiveCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
