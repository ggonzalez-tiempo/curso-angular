import { Component, OnInit } from '@angular/core';
import {SongService} from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public songName = '';
  public songs: Array<any>;

  constructor(private _songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  addSong() {
    this._songService.addSong(this.songName);
    this.songName = '';
  }

  getSongs() {
    this._songService.getSongs().then((response) => {
      this.songs = response;
    })
      .catch(err => {
        console.log(err);
      });
  }
}
