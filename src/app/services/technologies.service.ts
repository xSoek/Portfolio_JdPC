import { Injectable } from '@angular/core';
import { TECHNOLOGIES } from '../components/projects/technologies';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private technologies = [...TECHNOLOGIES];
  constructor() { }

  getAllTechnologies() {
    return this.technologies
  }
}
