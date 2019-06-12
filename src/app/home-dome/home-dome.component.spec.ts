import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDomeComponent } from './home-dome.component';

describe('HomeDomeComponent', () => {
  let component: HomeDomeComponent;
  let fixture: ComponentFixture<HomeDomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
