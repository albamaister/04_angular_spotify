import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artists: any [] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService ) {
   }
  search(termino: string) {
    this.loading = true;
    this.spotify.getArtists(termino).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
      });
  }

}
