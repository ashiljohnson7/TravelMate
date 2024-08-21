import { Component } from '@angular/core';
import { HoverService } from '../../hover.service';

@Component({
  selector: 'app-black-section',
  templateUrl: './black-section.component.html',
  styleUrls: ['./black-section.component.scss']
})
export class BlackSectionComponent {
  hoverText: string = '';

  constructor(private hoverService: HoverService) {}

  ngOnInit() {
    this.hoverService.hover$.subscribe(value => {
      this.hoverText = value;
    });
  }
}
