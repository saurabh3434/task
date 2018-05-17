import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackdetailComponent } from './rackdetail.component';

describe('RackdetailComponent', () => {
  let component: RackdetailComponent;
  let fixture: ComponentFixture<RackdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
