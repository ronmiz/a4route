

import { NgModule } from '@angular/core';
import { SearchService } from './services/search.service';
import{ UserService } from './services/user-service';
import { AlwaysAuthChildrenGuard } from './components/guards/AlwaysAuthChildrenGuard';
import { AlwaysAuthGuard } from './components/guards/always-auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule , 
  Routes,
  CanActivate,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot
} from '@angular/router';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {OnlyLoggedInUserGuard  } from './components/guards/OnlyLoggedInUserGuard';
import { UnsearhedTermGuard } from './components/guards/UnsearchedTermGuard';


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
  {path: 'search', component: SearchComponent, canDeactivate:[UnsearhedTermGuard]},
  {
    path: 'artist/:artistId',
    component: ArtistComponentComponent,
   // canActivate: [OnlyLoggedInUserGuard,AlwaysAuthGuard],
    canActivateChild:[AlwaysAuthChildrenGuard],
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
  providers: [
    SearchService,
    AlwaysAuthGuard,
    OnlyLoggedInUserGuard,
    AlwaysAuthChildrenGuard,
    UnsearhedTermGuard,
    UserService
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
