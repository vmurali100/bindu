import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibilingComponent } from './sibiling.component';

describe('SibilingComponent', () => {
  let component: SibilingComponent;
  let fixture: ComponentFixture<SibilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
