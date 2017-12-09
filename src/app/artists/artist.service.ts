import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class ArtistService {
  private artistList: Array<any> = [];
  constructor(
    private _http: Http
  ) { }

  searchArtist(searchString: string) {
   // const url = environment.lastFmUrl + 'albums';
    const url = `${environment.lastFmUrl}method=artist.search&artist=${searchString}&api_key=${environment.apiKey}&format=json`;
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise().then(response => {
        if (!response.error) {
          return this.artistList = response.results.artistmatches.artist;
        } else {
          console.log('Artist does not exists' + searchString);
        }
      });
  }

  getTopAlbumbs(artist: string) {
    const url = `${environment.lastFmUrl}method=artist.gettopalbums&artist=${artist}&api_key=${environment.apiKey}&format=json`;
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise().then(response => {
        if (!response.error) {
          return this.artistList = response.topalbums.album;
        } else {
          console.log('album does not exists' + artist);
        }
      });
  }
}
