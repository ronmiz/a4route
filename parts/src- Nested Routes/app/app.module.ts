

import { NgModule } from '@angular/core';
import { SearchService } from './services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule , Routes} from '@angular/router';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistComponentComponent } from './components/artist-component/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list-component/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/artist-album-list-component/artist-album-list.component';



 // {path: 'search/:term', component: SearchComponent},
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {
    path: 'artist/:artistId',
    component: ArtistComponentComponent,
    children: [
      {path: '', redirectTo: 'tracks' ,pathMatch: 'full'}, 
      {path: 'tracks', component: ArtistTrackListComponent}, 
      {path: 'albums', component: ArtistAlbumListComponent}, 
    ]
  },
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    ArtistComponentComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent
  ],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
