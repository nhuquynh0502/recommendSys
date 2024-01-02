import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResysForUserComponent } from './resys-for-user.component';

describe('ResysForUserComponent', () => {
  let component: ResysForUserComponent;
  let fixture: ComponentFixture<ResysForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResysForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResysForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
