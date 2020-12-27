import { Component, OnInit } from '@angular/core';
import projectList from '../../assets/data/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public title = 'Projects';
  public skillList = projectList;
  constructor() { }

  ngOnInit(): void {
    console.log(this.skillList);
  }
}
