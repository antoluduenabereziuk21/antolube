import { Injectable } from "@angular/core";
import { Education } from "../models/education.model";
import { of, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class EducationService{
      
    education:Education[]=[ {
        id: "1",
        title: "Bachelor of Computer Science",
        institute: "University of Buenos Aires",
        description: "A comprehensive course covering fundamental and advanced computer science topics.",
        certificate_url: "https://university.edu/certificate/bcs",
        start_date: new Date('2016-03-01'),
        end_date: new Date('2020-12-15')
      },
      {
        id: "2",
        title: "Full Stack Web Development",
        institute: "Coursera",
        description: "Online course focused on web development with JavaScript, HTML, CSS, and modern frameworks.",
        certificate_url: "https://coursera.org/certificate/fullstack",
        start_date: new Date('2021-01-01'),
        end_date: new Date('2021-06-30')
      },
      {
        id: "3",
        title: "Master of Software Engineering",
        institute: "MIT OpenCourseWare",
        description: "An in-depth study of software engineering principles, design patterns, and system architectures.",
        certificate_url: "https://mit.edu/certificate/mse",
        start_date: new Date('2022-01-15'),
        end_date: new Date('2023-01-15')
      },
      {
        id: "4",
        title: "Certified Java Developer",
        institute: "Oracle",
        description: "Certification course that covers core Java programming and advanced Java SE features.",
        certificate_url: "https://oracle.com/certificate/java-developer",
        start_date: new Date('2019-08-01'),
        end_date: new Date('2019-12-15')
      },
      {
        id: "5",
        title: "Cloud Architecture Specialization",
        institute: "Google Cloud",
        description: "Specialization focusing on designing scalable and efficient cloud solutions using Google Cloud.",
        certificate_url: "https://googlecloud.com/certificate/cloud-arch",
        start_date: new Date('2021-05-01'),
        end_date: new Date('2021-12-01')
      }]
    constructor(){}

    getEducations():Observable<Education[]>{
        return of(this.education);
    }
    addEducation(education :Education){
        this.education.unshift(education);
    }
}