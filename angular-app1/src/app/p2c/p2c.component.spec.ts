import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2cComponent } from './p2c.component';

describe('P2cComponent', () => {
  let component: P2cComponent;
  let fixture: ComponentFixture<P2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
