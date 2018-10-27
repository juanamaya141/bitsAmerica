
import { Routes } from '@angular/router';
import { ReleasesComponent } from './components/releases/releases.component';
import { ArtistComponent } from './components/artist/artist.component';

export const routes: Routes = [
  {path: 'home', component: ReleasesComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


