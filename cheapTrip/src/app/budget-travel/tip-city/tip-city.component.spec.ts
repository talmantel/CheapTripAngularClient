import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCityComponent } from './tip-city.component';

describe('TipCityComponent', () => {
  let component: TipCityComponent;
  let fixture: ComponentFixture<TipCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipCityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
