import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {

  // arrayOfData:any=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  arrayOfMusic:any=[];



  constructor(private musicservice:MusicServiceService, private router:Router) {
    
   }


  ngOnInit() {
    // console.log(this.arrayOfData);

    this.musicservice.getTrendingMusic().subscribe(data =>{
console.log(data.tracks.track);
      this.arrayOfMusic=data.tracks.track;
      console.log(this.arrayOfMusic[0].name);
      console.log("Data check");
    });
  
  }

}
