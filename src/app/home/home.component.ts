import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('intro')
  homeDiv!: ElementRef;
  @ViewChild('about')
  aboutDiv!: ElementRef;
  @ViewChild('skills')
  skillsDiv!: ElementRef;
  @ViewChild('projects')
  projectDiv!: ElementRef;
  @ViewChild('contact')
  contactDiv!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startNaviagation(event: string) {
    switch (event) {
      case 'intro':
        this.homeDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        break;
      case 'about':
        this.aboutDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        break;
      case 'skills':
        this.skillsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        break;
      case 'projects':
        this.projectDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        break;
      case 'contact':
        this.contactDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
    }
  }
}
