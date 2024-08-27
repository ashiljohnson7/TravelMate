import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hoverStates: boolean[] = [];

  videos = [
    { src: '/assets/world.mp4', 
      description: 'Dive into a handpicked collection of thrilling travel spots designed to ignite your wanderlust. From hidden gems to iconic landmarks, our carefully selected destinations promise unforgettable experiences and unique adventures tailored just for you. Explore the world with confidence and curiosity, knowing each location has been chosen for its exceptional charm and appeal.', 
      hoverText: 'Discover and Explore a Curated Selection of Exciting Travel Destinations',
      internalRoute: '/destination'
    },
    { src: '/assets/checklist.mp4', 
      description: 'Arrange every aspect of your trip with ease by securing top-notch hotel accommodations, convenient flight reservations, and all-inclusive travel packages. Whether you are seeking a cozy retreat, a luxury stay, or a seamless travel experience, we got you covered from start to finish, ensuring your journey is as smooth and enjoyable as possible.', 
      hoverText: 'Effortlessly Plan Your Perfect Getaway',
      internalRoute: '/flight' },

    // Add more video objects as needed
  ];

  constructor(private router: Router) {
    this.hoverStates = Array(this.videos.length).fill(false);
  }
  
  onHover(index: number, state: boolean) {
    this.hoverStates[index] = state;
  }
  onNavigate(route: string) {
    this.router.navigate([route]); // Internal routing using Angular's router
  }
}
