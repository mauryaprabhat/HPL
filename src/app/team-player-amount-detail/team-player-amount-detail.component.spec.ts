import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlayerAmountDetailComponent } from './team-player-amount-detail.component';

describe('TeamPlayerAmountDetailComponent', () => {
  let component: TeamPlayerAmountDetailComponent;
  let fixture: ComponentFixture<TeamPlayerAmountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayerAmountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayerAmountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
