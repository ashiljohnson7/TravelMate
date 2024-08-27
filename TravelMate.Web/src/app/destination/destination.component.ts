import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {

  images = [
    { src: '/assets/australia.jpg', alt: 'Image 1', link: '/destination1', overlayText: 'Australia' },
    { src: '/assets/europe.jpg', alt: 'Image 2', link: '/destination2', overlayText: 'Europe' },
    { src: '/assets/asia.jpg', alt: 'Image 3', link: '/destination3', overlayText: 'Asia' },
    { src: '/assets/Africa.jpeg', alt: 'Image 4', link: '/destination4', overlayText: 'Africa' },
    { src: '/assets/antartica.jpg', alt: 'Image 5', link: '/destination5', overlayText: 'Antartica' },
    { src: '/assets/NA.jpg', alt: 'Image 6', link: '/destination6', overlayText: 'North America' },
    { src: '/assets/SA.jpg', alt: 'Image 7', link: '/destination7', overlayText: 'South America' }
  ];

}
