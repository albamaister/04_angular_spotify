import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService ) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    });
  }

  getArtista( id: string ) {
    this.loadingArtist = true;
    this.spotify.getArtist( id ).subscribe( artist => {
      console.log( artist );
      this.artist = artist;
      this.loadingArtist = false;
    }, error => {
      console.log(error);
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
