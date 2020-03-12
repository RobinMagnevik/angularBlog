import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxapiComponent } from './ajaxapi.component';

describe('AjaxapiComponent', () => {
  let component: AjaxapiComponent;
  let fixture: ComponentFixture<AjaxapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
