import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class SongService {
  private songList: Array<any> = [];
  constructor(
    private _http: Http
  ) { }

  public getSongs() {
    const url = environment.apiUrl + 'albums';
    // const url = `${environment.apiUrl}albums`;
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise().then(response => {
        return this.songList = response;
      });
  }

  public addSong(songName) {
    this.songList.unshift({
      title: songName
    });
  }

}
