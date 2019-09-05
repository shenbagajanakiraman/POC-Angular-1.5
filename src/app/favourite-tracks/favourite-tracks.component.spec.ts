import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTracksComponent } from './favourite-tracks.component';

describe('FavouriteTracksComponent', () => {
  let component: FavouriteTracksComponent;
  let fixture: ComponentFixture<FavouriteTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
