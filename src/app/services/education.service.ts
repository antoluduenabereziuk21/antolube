import { Injectable } from "@angular/core";
import { Education } from "../models/education.model";
import { of, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class EducationService{
      
    education:Education[]=[
      {   "id":"1",
          "title": "Curso de Desarrollo Web Full Stack",
          "institute": "ICARO y Facultad de Ciencias Exactas, Físicas y Naturales - Universidad Nacional de Córdoba",
          "description": "En el curso de Desarrollador Web Full Stack, adquirí conocimientos fundamentales en HTML5, CSS3, JavaScript, Angular, Express, Sequelize, Node.js, MySQL y SQL. Estas tecnologías me permitieron construir aplicaciones web completas, tanto en el frontend como en el backend, integrando bases de datos y siguiendo buenas prácticas de desarrollo.",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/Certificado_Icaro_FCEFyN_UNC.png",
          "start_date": "2021-01-01",
          "end_date": "2021-09-06"
      },
      {   "id":"2",
          "title": "Introducción a la Programación",
          "institute": "Egg Cooperation",
          "description": "En el curso de Introducción a la Programación, adquirí las bases de la lógica de programación utilizando PSInt y Ruby. Este enfoque me permitió desarrollar una comprensión sólida de los fundamentos algorítmicos y estructuras lógicas clave para resolver problemas de manera eficiente.",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/certficadoArgentinaPrograma_pzMjHrILX",
          "start_date": "2023-03-01",
          "end_date": "2023-02-16"
      },
      {   "id":"3",
          "title": "Backend 2: Java y Base de Datos",
          "institute": "Egg Cooperation Argentina Programa 4.0",
          "description": "Durante el curso de Java y Bases de Datos, adquirí habilidades en Java 8, manejo de bases de datos con MySQL, y tecnologías como JDBC e Hibernate, lo que me permitió desarrollar aplicaciones robustas y eficientes, optimizando la interacción con bases de datos relacionales",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/Captura%20desde%202024-09-28%2008-18-36_mu2-BbRSHm.png",
          "start_date": "2022-05-03",
          "end_date": "2023-07-08"
      },
      {
          "id": "4",
          "title": "Programación Full Stack",
          "institute": "Egg Cooperation Argentina Programa 4.0",
          "description": "En el curso de Programador Full Stack Java, adquirí habilidades en Java, Spring Boot, JPA, Lombok, Git, GitHub y Spring Security. Estos conocimientos me permitieron desarrollar aplicaciones robustas y seguras, aplicando buenas prácticas de desarrollo y versionado de código.",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/CertificadoEggProgramacionFullStackJava.png",
          "start_date": "2023-07-08",
          "end_date": "2023-10-27"
      },
      {
          "id": "5",
          "title": "Frontend: HTML, CSS, JavaScript, React",
          "institute": "Egg Cooperation",
          "description": "En el curso de Frontend, adquirí habilidades en HTML, CSS, JavaScript y React, permitiéndome crear interfaces web dinámicas y responsivas, aplicando los principios de desarrollo frontend moderno",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/CertificadoEggFrontEndDeveloper.png",
          "start_date": "2023-07-15",
          "end_date": "2023-10-27"
      },
      {   "id": "6",
          "title": "Spring & Proyecto Integrador",
          "institute": "Egg Cooperation",
          "description": "En el proyecto integrador de Spring con Java, apliqué las habilidades adquiridas en el curso de Programador Full Stack Java, utilizando tecnologías como Java, Spring Boot, JPA, Lombok, Git, GitHub y Spring Security. Además, implementé la interfaz de usuario con Thymeleaf, Bootstrap, JavaScript y CSS. El proyecto tuvo una duración de 48 horas y obtuve un resultado de 88%, consolidando mis conocimientos en el desarrollo de aplicaciones backend con un enfoque completo tanto en funcionalidad como en diseño",
          "certificate_url": "https://ik.imagekit.io/dkyrnxtpj0h/Personal/ProyectoIntegradorJavaSpring.png",
          "start_date": "2023-11-12",
          "end_date": "2023-11-27"
      },
      {   "id": "7",
          "title": "BackEnd Developer  Java - Seleccionado 12",
          "institute": "No Country",
          "description": "Durante mi experiencia como Backend Developer en No Country, desarrollé dos proyectos destacados: Cashier, un monedero digital, y Track, una aplicación de gestión de proyectos. Cada uno de estos proyectos tuvo una duración aproximada de 6 a 7 semanas, durante las cuales utilicé tecnologías como Java 17, Spring Boot, Spring Security y Docker para crear soluciones eficientes y seguras. También implementé herramientas como Trello para la gestión del proyecto, asegurando una organización fluida y efectiva. Además, trabajé bajo metodologías Scrum, lo que fomentó la colaboración y garantizó el cumplimiento de plazos.",
          "certificate_url":"https://ik.imagekit.io/dkyrnxtpj0h/Personal/CertficadoExperienciaNoCountry.jpg",
          "start_date": "2023-09-01",
          "end_date": "2023-12-01"
      }
  ]
    constructor(){}

    getEducations():Observable<Education[]>{
        return of(this.education);
    }
    addEducation(education :Education){
        this.education.unshift(education);
    }
}