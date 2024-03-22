import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
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
    private _projectService : ProjectService){}

    ngOnInit(): void {
      this.getProjectDetails();
    }

    getProjectDetails():void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this._projectService.getProject(id).subscribe(project => this.project = project);
    }
}
