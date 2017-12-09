import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artistList: Array<any> = [];
  public albumList: Array<any> = [];
  public selectedArtist: string;
  public artistName: string;
  constructor(
    private _artistService: ArtistService
  ) { }

  ngOnInit() {
  }

  searchArtist() {
    console.log('Searching.....' + this.artistName);
    this._artistService.searchArtist(this.artistName)
      .then(response => {
        this.artistList = response;
      });
  }

  searchAlbums(artistSelected) {
    this.selectedArtist = artistSelected;
    console.log('Searching.....' + artistSelected);
    this._artistService.getTopAlbumbs(artistSelected).then(response => {
      this.albumList = response;
    });
  }
}
