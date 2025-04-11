import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSampleComponent } from './forms-sample.component';

describe('FormsSampleComponent', () => {
  let component: FormsSampleComponent;
  let fixture: ComponentFixture<FormsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
