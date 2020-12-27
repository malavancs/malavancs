import { Component, OnInit } from '@angular/core';
import experience from '../../assets/data/experience.json';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public title = '💼 EXPERIENCE';
  public experienceList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.experienceList = experience;
    console.log(this.experienceList);
  }

}
