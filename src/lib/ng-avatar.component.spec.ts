import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAvatarComponent } from './ng-avatar.component';

describe('NgAvatarComponent', () => {
  let component: NgAvatarComponent;
  let fixture: ComponentFixture<NgAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
