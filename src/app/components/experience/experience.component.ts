import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {

    experiences: Experience[] = [];
  
  constructor(
    private _experienceService : ExperienceService
  ){}

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences():void{
    this._experienceService.getExperiences().subscribe((data:Experience[])=>{
      this.experiences = data;
    })
  }
}
