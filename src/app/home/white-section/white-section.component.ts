import { Component } from '@angular/core';
import { HoverService } from '../../hover.service';


@Component({
  selector: 'app-white-section',
  templateUrl: './white-section.component.html',
  styleUrls: ['./white-section.component.scss']
})
export class WhiteSectionComponent {
  constructor(private hoverService: HoverService) {}

  playVideo(videoElement: HTMLVideoElement) {
    videoElement.play();
    this.onHover((videoElement as HTMLVideoElement).nextElementSibling?.textContent || '');
  }

  pauseVideo(videoElement: HTMLVideoElement) {
    videoElement.pause();
    this.onHover('Hover over the white section');
  }

  onHover(text: string) {
    this.hoverService.setHoverValue(text);
  }
}
