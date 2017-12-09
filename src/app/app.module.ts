import {routing} from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ng-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import {SongService} from './songs/song.service';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistService} from './artists/artist.service';
import { AlbumsComponent } from './artists/albums/albums.component';
import {AlbumsService} from './artists/albums.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent,
    AlbumsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    SongService,
    ArtistService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
