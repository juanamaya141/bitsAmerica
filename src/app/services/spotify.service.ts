import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //constructor donde injectamos el módulo HttpClient que nos permitira consumir la Api de spotify

  private headers;
  private token = 'BQCd66v59b5mnYfCGCn-0kNxMGhRFU_oMc_BHlD4MtQSlFC3nl1iR2b2a2N6M0eNbt-yWuVV6MROmNZF7kw'; 
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,      
    });
    console.log(this.token);
  }

  private getPetition(url){
    return this.http.get(url, {headers: this.headers});
  }

  //metodo que nos permite obtener los artistas desde el endpoint de spotify
  public getReleases(){
    return this.getPetition('https://api.spotify.com/v1/browse/new-releases');
  }
  
  public getArtist(id:string){
    return this.getPetition(`https://api.spotify.com/v1/artists/${id}`);
  }

  public getTracksByArtist(id:string){
    return this.getPetition(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=SE`);
  }
}
