import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../../models/education.model';
import { EducationService } from '../../services/education.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
 educationList: Education[]=[];
 certificateUrl: SafeResourceUrl | null = null;

 constructor (
  private _educationService : EducationService,
  private modalService: NgbModal,
    private sanitizer: DomSanitizer
 ){}

 openModal(content: any, url: string) {
  // Sanitizar la URL para que sea segura
  this.certificateUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  this.modalService.open(content); // Muestra el modal de ng-bootstrap
}

closeModal() {
  this.certificateUrl = null;
  this.modalService.dismissAll(); // Cierra el modal de ng-bootstrap
}

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
