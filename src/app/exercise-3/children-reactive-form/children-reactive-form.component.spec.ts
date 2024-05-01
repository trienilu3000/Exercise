import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenReactiveFormComponent } from './children-reactive-form.component';

describe('ChildrenReactiveFormComponent', () => {
  let component: ChildrenReactiveFormComponent;
  let fixture: ComponentFixture<ChildrenReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
