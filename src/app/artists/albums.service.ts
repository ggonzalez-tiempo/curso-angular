import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class AlbumsService {
  private albumInfo = {};
  constructor(
    private _http: Http
  ) { }

  getAlbumInfo(artistName: string, albumName: string ) {
    const url = `${environment.lastFmUrl}method=album.getinfo&artist=${artistName}&album=${albumName}&api_key=${environment.apiKey}&format=json`;
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise().then(response => {
        if (!response.error) {
          return this.albumInfo = response.album;
        } else {
          console.log('Album does not exist' + albumName);
        }
      });
  }
}
