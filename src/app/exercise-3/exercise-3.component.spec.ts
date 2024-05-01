import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3Component } from './exercise-3.component';

describe('Exercise3Component', () => {
  let component: Exercise3Component;
  let fixture: ComponentFixture<Exercise3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
