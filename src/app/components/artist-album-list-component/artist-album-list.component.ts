import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';

@Component({
  selector: 'app-artist-album-list-component',
  template: `<ul class="list-group">
	<li class="list-group-item"
	    *ngFor="let album of albums">
		<img src="{{album.artworkUrl60}}">
		<a target="_blank"
		   href="{{album.collectionViewUrl}}">{{ album.collectionName }}
		</a>
	</li>
</ul>
 `,
})
export class ArtistAlbumListComponent {
  private albums: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.albums = res.json().results.slice(1);
          });
    });
  }

}
