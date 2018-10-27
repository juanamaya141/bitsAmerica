import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //constructor donde injectamos el módulo HttpClient que nos permitira consumir la Api de spotify

  private headers;
  private token = 'BQCQm0Qq-krkU-jceNLbFOSwTdkiJkUIGbyVAYGXgiS2F4zae_BHLnZ52Sf6SOeDZQU35D2r_dfd7r5_E84'; 
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
}
