import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MusicServiceService {

  constructor(private http:HttpClient) { 

  }

  getTrendingMusic ():any {
    console.log ("Getting Top tracks...");
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=77578e6c874e5285a77d6b5657e3f0d4&format=json")
  }


  getDetailsOfTrack(artistName,albumName):any {
    console.log("Getting Track Details");
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=77578e6c874e5285a77d6b5657e3f0d4&artist=${artistName}&album=${albumName}&format=json`)
  }
}
  
