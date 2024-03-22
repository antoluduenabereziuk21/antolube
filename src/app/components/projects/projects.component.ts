import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { Subscription } from 'rxjs';
import { InteractionsService } from '../../services/interactions.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projects : Project[] = [];
  selectedProject: Project | null = null;
  isInHome: boolean = true;
  private subscription!: Subscription;

  constructor(
    private _projectService : ProjectService,
    private _interactionService:InteractionsService
  ){}

  ngOnInit(): void {
    this.subscription = this._interactionService.isHome$.subscribe(isHome => {
      this.isInHome = isHome;
    });
    this.getProjects();
  }

  getProjects():void{
    this._projectService.getProjects().subscribe((data:Project[])=>{
      this.projects = data;
      console.log(data);
    });
  }
  showProjectModal(event:MouseEvent,project: Project) {
    event.preventDefault(); // Evita la acción de redireccionamiento
    console.log("estoy disparando el evento para el proyecto"+project.title)
    this.selectedProject = project;
    console.log(this.selectedProject.title+"el titulo del proyecto seleccionado")
  }

  closeProjectModal() {
    this.selectedProject = null;
  }
}
