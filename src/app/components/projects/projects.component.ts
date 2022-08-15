import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { PROJECTS } from './projects_list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[];
  currentProject: any = {};
  technologies: any[];
  constructor(private technologiesService: TechnologiesService) {
    this.projects = [...PROJECTS];
    this.technologies = this.technologiesService.getAllTechnologies();
    this.projects.forEach((project) => {
      this.setTechnologiesIcons(project)
    })
  }

  ngOnInit(): void {

  }

  setTechnologiesIcons = (project: any) => {
    project.technologies.forEach((technology: any, index: number) => {

      let iconURL = this.technologies.find(tech => tech.id === technology).icon
      project.technologies[index] = iconURL
    });
  }

  openPage(url: string) {
    window.open(url, '_blank')!.focus();
  }

  setCurrentProject = (e: any, id: string) => {
    this.currentProject = this.projects.find(project => id === project.id);
    let active_project = document.querySelector<HTMLElement>(".active-project")
    if (active_project)
      active_project.classList.remove("active-project");

    e.target.classList.add("active-project")
  }

  checkMediaQuery(query: string) {
    return window.matchMedia('(' + query + ')').matches
  }
}
