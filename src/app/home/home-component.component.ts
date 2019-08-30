import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player'; 

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  
  msaapPlaylist: Track[] = [
    {
        title: 'Track 1',
        link: '../assets/songs/rising.wav'
    },
    {
        title: 'Track 2',
        link: '../assets/songs/rising.wav'
    },
    {
        title: 'Track 3',
        link: '../assets/songs/rising.wav'
    },
];
 
constructor() { }

  ngOnInit() {

    // this.msbapAudioUrl = '../assets/songs/rising.wav';



  }



}
