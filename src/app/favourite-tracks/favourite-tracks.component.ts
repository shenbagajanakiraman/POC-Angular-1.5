import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favourite-tracks',
  templateUrl: './favourite-tracks.component.html',
  styleUrls: ['./favourite-tracks.component.css']
})
export class FavouriteTracksComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  favourites:any=[];

  ngOnInit() {
    console.log("Displaying MyFavourites...");
    this.addFavourites();

  }
  addFavourites() {

    const track = this.route.snapshot.paramMap.get('albumName');
    const artist = this.route.snapshot.paramMap.get('artistName');
    const playcount = this.route.snapshot.paramMap.get('playcount');

    this.favourites.track= track;
    this.favourites.artist= artist;
    this.favourites.playcount= playcount;

  
  }


}
