import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{

  skills : Skill[]=[];

  constructor(
    private _skillService: SkillService
  ){}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills():void{
    this._skillService.getSkills().subscribe((data:Skill[])=>{
      this.skills = data;
    })
  }
}
