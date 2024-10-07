import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/education.model';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
 educationList: Education[]=[];

 constructor (private _educationService : EducationService){}
 ngOnInit(): void {
  this.getEducations();
}

getEducations():void{
  this._educationService.getEducations().subscribe((data:Education[])=>{
    this.educationList = data;
    console.log('Proyectos en el componente:', this.educationList)
  })
}
}
