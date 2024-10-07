import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillService } from '../../services/skills.service';
import { InteractionsService } from '../../services/interactions.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{

  skills : Skill[]=[];
  isInHome: boolean = true;
  private subscription!: Subscription;

  constructor(
    private _skillService: SkillService,
    private _interactionService:InteractionsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.subscription = this._interactionService.isHome$.subscribe(isHome => {
      this.isInHome = isHome;
    });
    this.getSkills();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Esto asegura que el scroll vuelva al tope
      }
    });
  }

  getSkills():void{
    this._skillService.getSkills().subscribe((data:Skill[])=>{
      this.skills = data;
    })
  }
}
