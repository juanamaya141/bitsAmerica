// Importación módulos core de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Importación de los componentes
import { AppComponent } from './app.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { TitleComponent } from './components/title/title.component';
import { ReleaseComponent } from './components/release/release.component';

// Importación de las rutas
import { routes } from './app.routes';


// Importación de los servicios
import { SpotifyService } from './services/spotify.service';
import { ImagePipe } from './pipes/image.pipe';
import { ArtistComponent } from './components/artist/artist.component';




@NgModule({
  declarations: [
    AppComponent,
    ReleasesComponent,
    TitleComponent,
    ReleaseComponent,
    ImagePipe,
    ArtistComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
