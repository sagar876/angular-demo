import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonightslistComponent } from './tonightslist.component';

describe('TonightslistComponent', () => {
  let component: TonightslistComponent;
  let fixture: ComponentFixture<TonightslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonightslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonightslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
