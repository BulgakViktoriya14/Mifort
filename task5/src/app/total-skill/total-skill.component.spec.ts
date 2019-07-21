import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSkillComponent } from './total-skill.component';

describe('TotalSkillComponent', () => {
  let component: TotalSkillComponent;
  let fixture: ComponentFixture<TotalSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
