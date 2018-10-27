import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  id:string;
  artist:any = [];
  tracks:any = [];
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {

    this.route.params.subscribe( params => this.id = params.id )
    
    this.spotify.getArtist(this.id)
      .subscribe( (response:any) => this.artist = response );
    this.spotify.getTracksByArtist(this.id)
      .subscribe( (response:any) => this.tracks = response.tracks );
  }
 
}
