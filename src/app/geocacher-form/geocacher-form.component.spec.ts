import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacherFormComponent } from './geocacher-form.component';

describe('GeocacherFormComponent', () => {
  let component: GeocacherFormComponent;
  let fixture: ComponentFixture<GeocacherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
