import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpopComponent } from './studentpop.component';

describe('StudentpopComponent', () => {
  let component: StudentpopComponent;
  let fixture: ComponentFixture<StudentpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
