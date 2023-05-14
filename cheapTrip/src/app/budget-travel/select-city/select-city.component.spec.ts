import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectCityComponent } from './select-city.component';

describe('SelectDirectionComponent', () => {
  let component: SelectCityComponent;
  let fixture: ComponentFixture<SelectCityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCityComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
