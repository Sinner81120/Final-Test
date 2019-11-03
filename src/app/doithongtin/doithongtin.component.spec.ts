import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoithongtinComponent } from './doithongtin.component';

describe('DoithongtinComponent', () => {
  let component: DoithongtinComponent;
  let fixture: ComponentFixture<DoithongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoithongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoithongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
