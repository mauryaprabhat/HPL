import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlayerDetailComponent } from './team-player-detail.component';

describe('TeamPlayerDetailComponent', () => {
  let component: TeamPlayerDetailComponent;
  let fixture: ComponentFixture<TeamPlayerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
