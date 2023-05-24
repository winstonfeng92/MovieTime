import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-trailer-dialog',
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.scss']
})
export class TrailerDialogComponent {

  videos: any[]; // Array to store the videos
  currentVideoIndex: number = 0; // Index of the currently displayed video
  videoId: string; // Current video ID
  apiLoaded: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { videos: any[], initialVideoIndex: number },
    private dialogRef: MatDialogRef<TrailerDialogComponent>
  ) {
    this.videos = data.videos;
    this.currentVideoIndex = data.initialVideoIndex;
    this.videoId = this.videos[this.currentVideoIndex].key;
  }

  nextVideo(): void {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
      this.videoId = this.videos[this.currentVideoIndex].key;
    }
  }

  previousVideo(): void {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
      this.videoId = this.videos[this.currentVideoIndex].key;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // ngOnInit() {
  //   if (!this.apiLoaded) {
  //     // This code loads the IFrame Player API code asynchronously, according to the instructions at
  //     // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
  //     const tag = document.createElement('script');
  //     tag.src = 'https://www.youtube.com/iframe_api';
  //     document.body.appendChild(tag);
  //     this.apiLoaded = true;
  //   }
  // }

}
