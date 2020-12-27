import { Component, OnInit } from '@angular/core';
import skillList from '../../assets/data/skills.json';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public title = 'SKILL-SET';
  public skillList = skillList;
  constructor() { }

  ngOnInit(): void {
    console.log(this.skillList);
  }

}
