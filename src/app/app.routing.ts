import {RouterModule, Routes} from '@angular/router';
import {SongsComponent} from './songs/songs.component';
import {ArtistsComponent} from './artists/artists.component';
import { AlbumsComponent } from './artists/albums/albums.component';

const APP_ROUTES: Routes = [
  {path: 'songs', component: SongsComponent},
  {path: 'artist', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'artist/:artistName/albums/:albumName', component: AlbumsComponent},
  {path: '**', redirectTo: '/artist', pathMatch: 'full'}];

export const routing = RouterModule.forRoot(APP_ROUTES)
