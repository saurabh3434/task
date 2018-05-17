import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackinstanceComponent } from './rackinstance.component';

describe('RackinstanceComponent', () => {
  let component: RackinstanceComponent;
  let fixture: ComponentFixture<RackinstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackinstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
