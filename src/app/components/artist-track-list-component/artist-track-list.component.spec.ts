import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTrackListComponentComponent } from './artist-track-list-component.component';

describe('ArtistTrackListComponentComponent', () => {
  let component: ArtistTrackListComponentComponent;
  let fixture: ComponentFixture<ArtistTrackListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTrackListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTrackListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
