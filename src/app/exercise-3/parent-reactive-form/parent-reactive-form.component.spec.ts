import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReactiveFormComponent } from './parent-reactive-form.component';

describe('ParentReactiveFormComponent', () => {
  let component: ParentReactiveFormComponent;
  let fixture: ComponentFixture<ParentReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
