import { Component, OnInit } from '@angular/core';
import { HoverService } from '../hover.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hoverText: string = '';

  constructor(private hoverService: HoverService) {
    this.hoverService.hover$.subscribe(value => {
      this.hoverText = value;
    });
  }

  setHoverText(text: string) {
    this.hoverService.setHoverValue(text);
  }

  clearHoverText() {
    this.hoverService.setHoverValue('');
  }

  playVideo(text: string) {
    const videoElements = document.querySelectorAll('.content');
    videoElements.forEach(video => {
      if (video instanceof HTMLVideoElement) {
        video.play().catch(error => {
          console.error('Error attempting to play video:', error);
        });
      }
    });
    this.hoverService.setHoverValue(text);
  }

  pauseVideo() {
    const videoElements = document.querySelectorAll('.content');
    videoElements.forEach(video => {
      if (video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
    this.hoverService.setHoverValue('');
  }
  enableVideoPlayback(event: Event) {
    const videoElement = (event.currentTarget as HTMLElement).querySelector('video');
    if (videoElement) {
      videoElement.muted = true; // Optional: Mute the video to allow autoplay
      videoElement.play().catch(error => {
        console.warn('Error attempting to play video:', error);
      });
    }
  }
}