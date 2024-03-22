import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponentComponent } from './project.details.component/project.details.component.component';





@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectDetailsComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ]
})
export class ComponentsModule { }
