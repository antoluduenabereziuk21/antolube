import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ProjectService } from '../../services/projects.service';

@Component({
  selector: 'app-project.details.component',
  templateUrl: './project.details.component.component.html',
  styleUrl: './project.details.component.component.css'
})
export class ProjectDetailsComponentComponent implements OnInit{

  project: Project | undefined;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private _projectService : ProjectService){}

    ngOnInit(): void {
      this.getProjectDetails();
    }

    getProjectDetails():void {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this._projectService.getProject(id).subscribe(project => this.project = project);
    }

    goBackToProjectsList(): void {
      this.router.navigate(['/projects']); // Redirige a la ruta de la lista de proyectos
    }
}
