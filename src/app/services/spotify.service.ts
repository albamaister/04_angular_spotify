import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer QBeK4FD38dekhxcej0DlPME3lD0TNbfeENqtVETXusPrW-SpFhNmRTpSlApfKVjJktNwnpadLp8k9JQYyY'
      });
    return this.http.get(url, {headers});
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases') .pipe( map(data => data['albums'].items));
  }
  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map(data => data['artists'].items));

  //   const headers = new HttpHeaders({
  //   Authorization : 'Bearer BQAFqB7fXhkYjiAugMtJ8BjOjcP8NXma7Znw6QNWNt61-rbkJg7qAxS7JOnipubszrHf65UmCABQh8FRilA'
  //   });
  //   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
  //   .pipe( map(data => data['artists'].items
  // ));
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`); //.pipe( map(data => data['artists'].items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map(data => data['tracks']));
  }
}
