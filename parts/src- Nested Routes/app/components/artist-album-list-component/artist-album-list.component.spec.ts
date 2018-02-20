import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumListComponentComponent } from './artist-album-list-component.component';

describe('ArtistAlbumListComponentComponent', () => {
  let component: ArtistAlbumListComponentComponent;
  let fixture: ComponentFixture<ArtistAlbumListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAlbumListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
