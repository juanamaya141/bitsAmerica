import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent {
  releases:any = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getReleases()
      .subscribe( (response:any) => this.releases = response.albums.items );
  }
}
