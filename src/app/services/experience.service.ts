import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";
import { of, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ExperienceService{
    experience: Experience[] = [
      
        {   "id":"1",
            "title": "Freelance Programmer",
            "company": "Autónomo",
            "description": "Colaboré en el desarrollo del Servicio de Chat Bot, un proyecto enfocado en mejorar el proceso de venta de comida rápida. Mi contribución incluyó trabajar en equipo para diseñar la arquitectura y funcionalidades del bot, así como en la integración de servicios de mensajería para mejorar la experiencia del cliente. Actualmente, el proyecto está implementado y diseñado con un enfoque SaaS, lo que permite su expansión y adaptación a diversos procesos comerciales en el futuro. Las tecnologías utilizadas incluyen Node.js, Java Spring Boot, Baileys y WAWebSockets para la integración con WhatsApp, PostgreSQL para la gestión de datos, y JasperReports para la generación de reportes personalizados.",
            "start_date": "2023-12-01",
            "end_date": null
        },
        {   "id":"",
            "title": "Asistente Personal Bot",
            "company": "Freelance",
            "description": "Actualmente estoy desarrollando un bot asistente personal utilizando Node.js, Baileys y WAWebSockets para la integración con WhatsApp, junto con Bing AI para proporcionar respuestas inteligentes y contextuales. Mi objetivo es crear una solución que facilite la gestión de tareas diarias y mejore la productividad personal. Este proyecto está diseñado para adaptarse a las necesidades específicas del usuario, permitiendo una interacción fluida y efectiva.",
            "start_date": "2024-08-29",
            "end_date": null
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