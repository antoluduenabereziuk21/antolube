import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";
import { of, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ExperienceService{
    experience: Experience[] = [
        {
          id: "1",
          title: "Backend Developer",
          company: "Tech Solutions",
          description: "Developed and maintained REST APIs using Java and Spring Boot, ensuring high performance and scalability.",
          start_date: new Date('2020-02-01'),
          end_date: new Date('2022-05-30')
        },
        {
          id: "2",
          title: "Full Stack Developer",
          company: "Innovative Web",
          description: "Worked on front-end (Angular) and back-end (Node.js) development for e-commerce platforms.",
          start_date: new Date('2022-06-01'),
          end_date: new Date('2023-08-30')
        },
        {
          id: "3",
          title: "Junior Software Engineer",
          company: "Startup Inc.",
          description: "Collaborated with cross-functional teams to develop new features and improve software quality.",
          start_date: new Date('2018-09-15'),
          end_date: new Date('2020-01-30')
        },
        {
          id: "4",
          title: "DevOps Engineer",
          company: "Cloudy Tech",
          description: "Automated deployment pipelines and managed cloud infrastructure using Docker and Kubernetes.",
          start_date: new Date('2019-03-01'),
          end_date: new Date('2021-01-15')
        },
        {
          id: "5",
          title: "Software Engineer Intern",
          company: "Global Solutions",
          description: "Assisted in the development of microservices and API integrations using Java and PostgreSQL.",
          start_date: new Date('2017-06-01'),
          end_date: new Date('2017-12-15')
        }
      ];
      
    constructor(){}

    getExperiences():Observable<Experience[]>{
        return of(this.experience);
    }
    addExperience(experience :Experience){
        this.experience.unshift(experience);
    }
}