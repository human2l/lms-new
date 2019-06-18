import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonEditComponent } from './lesson-edit.component';

describe('LessonEditComponent', () => {
  let component: LessonEditComponent;
  let fixture: ComponentFixture<LessonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
