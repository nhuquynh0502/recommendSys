import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResysForMovieComponent } from './resys-for-movie.component';

describe('ResysForMovieComponent', () => {
  let component: ResysForMovieComponent;
  let fixture: ComponentFixture<ResysForMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResysForMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResysForMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
