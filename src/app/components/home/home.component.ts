import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
    this.nuevasCanciones = data;
    }, ( errorServicio ) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
          console.log(errorServicio.error.error.message);
    });
   }

}
