import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../albums.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albumInfo: any = {};
  private bgStyle: any;
  private searchCriteria = {
    artistName: '',
    albumName: ''
  };

  constructor(
    private _albumService: AlbumsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.searchCriteria.artistName = params['artistName'];
      this.searchCriteria.albumName = params['albumName'];
    });
    this.getAlbumInfo();
    this.bgStyle = '';
  }

  getAlbumInfo() {
    this._albumService.getAlbumInfo(this.searchCriteria.artistName, this.searchCriteria.albumName).then(response => {
      this.albumInfo = response;
      console.log(this.albumInfo);
    });
  }
}
