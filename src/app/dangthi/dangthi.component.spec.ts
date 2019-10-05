import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangthiComponent } from './dangthi.component';

describe('DangthiComponent', () => {
  let component: DangthiComponent;
  let fixture: ComponentFixture<DangthiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangthiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
