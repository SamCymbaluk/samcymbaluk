import {Component, HostListener, OnInit} from '@angular/core';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [SlideInOutAnimation]
})
export class NavbarComponent implements OnInit {

  socialMedia: {name: string; icon: string; url: string}[] = [];

  mobileMenuState = 'out';

  constructor() { }

  ngOnInit() {
    this.socialMedia.push({
      name: 'Email',
      icon: 'fa-envelope-o',
      url: 'mailto:samuelcymbaluk@gmail.com'
    });
    this.socialMedia.push({
      name: 'Github',
      icon: 'fa-github',
      url: 'https://github.com/SamCymbaluk'
    });
    this.socialMedia.push({
      name: 'Linkedin',
      icon: 'fa-linkedin-square',
      url: 'https://www.linkedin.com/in/sam-cymbaluk/'
    });
    this.socialMedia.push({
      name: 'Devpost',
      icon: 'devpost',
      url: 'https://devpost.com/SamCymbaluk'
    });
  }

  toggleMobileMenu(): void {
    console.log('toggling mobile menu');
    this.mobileMenuState = this.mobileMenuState === 'out' ? 'in' : 'out';
    console.log(this.mobileMenuState);
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    // this.mobileMenuState = 'out';
  }

}
