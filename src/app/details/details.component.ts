import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private musicService:MusicServiceService, private route:ActivatedRoute, private router:Router) { }

  musicData:any;

  ngOnInit() {
    this.details();
  }
  details() {
    console.log("Calling service for details...");
    const albumName = this.route.snapshot.paramMap.get('albumName');
    const artistName = this.route.snapshot.paramMap.get('artistName');

    this.musicService.getDetailsOfTrack(artistName,albumName).subscribe(data => {
      console.log("Check123....");
      this.musicData=data;
      console.log(data);

    }) ;

    }

  }


