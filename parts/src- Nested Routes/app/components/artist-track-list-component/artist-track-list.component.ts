import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';

@Component({
  selector: 'app-artist-track-list-component',
  template: `
  <ul class="list-group">
    <li class="list-group-item"
        *ngFor="let track of tracks">
      <img src="{{track.artworkUrl30}}">
      <a target="_blank"
         href="{{track.trackViewUrl}}">{{ track.trackName }}
      </a>
    </li>
  </ul>
   `,
})
export class ArtistTrackListComponent  {

  private tracks: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.tracks = res.json().results.slice(1);
          });
    });
  }

}
