
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




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
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
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
