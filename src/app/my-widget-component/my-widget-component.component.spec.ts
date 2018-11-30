import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidgetComponentComponent } from './my-widget-component.component';

describe('MyWidgetComponentComponent', () => {
  let component: MyWidgetComponentComponent;
  let fixture: ComponentFixture<MyWidgetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWidgetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWidgetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
