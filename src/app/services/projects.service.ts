import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
import { of, Observable, map, catchError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    // projects: Project[] = [
    //     {
    //         id: 1,
    //         title: 'Digital Wallet Cashier',
    //         short_description: 'Cashier es una billetera digital diseñada para ser su pasaporte al mundo financiero moderno.Que esperas para ser parte de esta iniciativa.',
    //         description: '"Cashier" 📱, un monedero digital que está revolucionando la forma en que gestionamos nuestras finanzas. 💰💳<br><br>✅ Intuitiva: facilita al usuario la interactividad de la aplicación, logrando realizar pagos y transferencias de manera segura y confiable.<br>✅ Controles de Seguridad: cifrado de alto nivel para proteger tus datos y transacciones. Tu dinero está en las mejores manos.<br>✅ Recompensas de Lealtad: Cashier valora tu lealtad ofreciéndote descuentos exclusivos en los mejores negocios.<br>✅ Tecnología de Vanguardia: Cashier está desarrollada con los mas robustos lenguajes de programación y bajo principios SOLID es fácilmente mantenible y escalable.',
    //         technologies_backend: ['Java 17',
    //         'Spring Boot',
    //         'Spring Data JPA',
    //         'Spring Security',
    //         'Spring Mail',
    //         'Docker',
    //         'Deploy: IBM X3550 M4',
    //         'Lombok',
    //         'Maven',
    //         'Swagger',
    //         'Zxing',
    //         'Fl0: PostgreSQL',
    //         'JWT',
    //         'Firestorage'],
    //         technologies_frontend: ['Angular', 'HTML', 'CSS', 'Bootstrap','Deploy:Netlify'],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/assets/banners/banner_TBDEQD2tS.png',
    //         url: 'https://cashier-app-23.netlify.app/login',
    //         url_video:'https://www.youtube.com/watch?v=HhMpTuKcwdA',
    //         github:'https://github.com/antoluduenabereziuk21/CashierApp/',
    //     },
    //     {
    //         id: 2,
    //         title: 'Track: Gestión de Proyectos Integrada con Chat',
    //         short_description: 'Track es una completa aplicación de gestión de proyectos que te ayuda a organizar y realizar un seguimiento efectivo de tus tareas.',
    //         description: 'Track es una completa aplicación de gestión de proyectos que te ayuda a organizar y realizar un seguimiento efectivo de tus tareas. Cada espacio de trabajo representa un proyecto independiente y se organiza en tableros y tareas. Además, cuenta con un sistema de comunicación tipo chat integrado para una colaboración eficiente del equipo.<br><br>🛠️ Creación, edición y eliminación de proyectos (espacios de trabajo).<br>📋 Organización de proyectos en tableros para un seguimiento estructurado.<br>📝 Creación y asignación de tareas a tableros específicos.<br>👥 Asignación de tareas a integrantes del equipo para un seguimiento claro de responsabilidades.<br>🔄 Seguimiento del progreso de las tareas.<br>💬 Sistema de comunicación tipo chat integrado para una colaboración eficiente del equipo.',
    //         technologies_backend: [
    //             'Spring Boot',
    //             'Spring Data JPA',
    //             'Spring Security',
    //             'Lombok',
    //             'Maven',
    //             'Swagger'
    //         ],
    //         technologies_frontend: ['Next.js', 'HTML', 'CSS', 'Bootstrap'],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/assets/banners/appTrack_JkIfEPfW2.png',
    //         url: 'https://s12-15-t-java-react-ol6n.vercel.app/',
    //         url_video: '',
    //         github:'https://github.com/antoluduenabereziuk21/Track-app-React-Java',
    //     },
    //     {
    //         id: 3,
    //         title: 'Desafío del Secreto Numérico: ¡Adivina en 3!',
    //         short_description: '"Desafía tu habilidad numérica en este emocionante juego de adivinanzas. ¿Podrás descifrar el número secreto en solo tres intentos? ¡Demuestra tu destreza y supera este desafío numérico!"',
    //         description: "Sumérgete en la emocionante experiencia de 'Desafío Numérico', un juego cautivador que desafía tus habilidades numéricas como nunca antes. En este desafío, te enfrentarás a la tarea de descifrar un número secreto en tan solo tres intentos.<br>Cada movimiento cuenta mientras te sumerges en la tensión y la emoción de cada adivinanza.<br>",

    //         technologies_frontend: ['HTML', 'CSS','JS', 'Bootstrap'],
    //         technologies_backend: [],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/assets/banners/appnumerosecreto_32dvhbA2l.png',
    //         url: 'https://antoluduenabereziuk21.github.io/JuegoNumeroSecreto/',
    //         url_video:'',
    //         github:'https://github.com/antoluduenabereziuk21/JuegoNumeroSecreto/',
    //     },
    //     {
    //         id: 4,
    //         title: 'Medi Ya',
    //         short_description: 'Somos la Solución Integral para la Gestión de Citas Médicas y Historias Clínicas"',
    //         description: "🚀 **Introducción a Medi Ya** 🚀<br>¡Bienvenido a Medi Ya, nuestra plataforma de gestión de salud! En un mundo donde el tiempo es invaluable y la atención médica es esencial, hemos desarrollado una solución innovadora para abordar los desafíos comunes en la administración de consultas médicas y la atención al paciente.<br><br>🏥 **PROBLEMA** 🏥<br>La dificultad para conseguir turnos y la pérdida de la historia clínica del paciente son problemas que enfrentan tanto los profesionales de la salud como los pacientes. La falta de un sistema eficiente para gestionar la información médica puede generar inconvenientes y retrasos en la atención médica, lo que afecta negativamente la experiencia del paciente y la eficiencia de los profesionales de la salud.<br><br>💡 **NUESTRA SOLUCIÓN** 💡<br>Medi Ya ofrece una solución integral que permite a los usuarios profesionales gestionar sus perfiles y las historias clínicas de sus pacientes de manera eficiente. Los pacientes pueden acceder fácilmente a la plataforma para buscar profesionales por especialidad, agendar turnos y proporcionar información relevante para su atención médica.<br>Además, hemos incorporado funciones avanzadas que permiten a los profesionales de la salud visualizar la reputación de cada paciente, brindando una mayor confianza en la elección del médico.<br><br>🎯 **OBJETIVO** 🎯<br>Nuestro objetivo es mejorar la accesibilidad, eficiencia y calidad de la atención médica al proporcionar una plataforma intuitiva y segura que facilite la comunicación entre profesionales de la salud y pacientes, y optimice el proceso de gestión de consultas médicas.<br><br>¡Únete a nosotros en esta emocionante jornada para transformar la experiencia de la atención médica!",
    //         technologies_backend: [
    //             "Java 8",
    //             "Spring Boot 2.7.17",
    //             "Maven",
    //             "MySQL",
    //             "Netbeans",
    //             "VScode"],
    //         technologies_frontend: ["Thymeleaf",'Bootstrap'],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/assets/banners/mediya_GUH9eMcvg.png',
    //         url: '',
    //         url_video:'',
    //         github:'https://github.com/antoluduenabereziuk21/AppServiciosDeSalud/',
    //     },
    //     {
    //         id: 5,
    //         title: 'ChatBot Wot',
    //         short_description: 'Queremos ofrecerle no solo una herramienta para realizar pedidos, sino un compañero digital que comprenda sus preferencias y haga de cada comida una experiencia fácil y deliciosa.',
    //         description:'¿Cansado de esperar? 😴 Nosotros también lo estábamos. Por eso, presentamos nuestro innovador servicio de mensajería Chat Bot en WhatsApp.<br><br>📩 Adiós a la espera de la carta: Olvídate de las largas demoras para recibir información importante.<br><br>⏳ Respuestas en tiempo récord: ¿Harto de esperar minutos para una respuesta? Nuestro chat bot responde en segundos. Este Chat Bot se encarga en primera instancia de gestionar el proceso de venta de comida rápida, pero con el tiempo se podrá integrar a casi cualquier proceso comercial.',
    //         technologies_backend: [
    //         'Java 17',
    //         'Spring Boot',
    //         'Spring Data JPA',
    //         'Spring Security',
    //         'Docker',
    //         'Lombok',
    //         'Maven',
    //         'PostgreSQL',
    //         'JWT'
    //         ],
    //         technologies_frontend: [
    //         'Whiskeysockets/Baileys',
    //         'NodeJs 18',
    //         'WhatsApp Business'],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/assets/banners/wot_UlNVjLE1J.png',
    //         url:'https://github.com/antoluduenabereziuk21/DevBot/',
    //         url_video:'',
    //         github:'https://github.com/antoluduenabereziuk21/DevBot/',
    //     },
    //     {
    //         id: 6,
    //         title: 'Mi Portafolio',
    //         short_description: 'Portafolio desarrollado con Angular, mostrando proyectos destacados y habilidades en frontend y backend. Diseño responsivo y enfocado en la usabilidad.',
    //         description: 'Portafolio desarrollado en Angular 17 utilizando una arquitectura modular, integrando diferentes módulos para mejorar la organización y mantenibilidad del código. Se ha implementado Bootstrap para garantizar un diseño responsivo y moderno. El portafolio destaca proyectos en frontend y backend, presentando habilidades en desarrollo full stack. El enfoque está en la usabilidad y la experiencia del usuario, con una estructura optimizada y escalable.',
    //         technologies_backend: [],
    //         technologies_frontend: ['Angular', 'HTML', 'CSS', 'Bootstrap','Deploy:GitHubPages'],
    //         banner: 'https://ik.imagekit.io/dkyrnxtpj0h/antolube_2NhHzf2vk_TEoEminHz.webp',
    //         url: '',
    //         url_video:'',
    //         github:'https://github.com/antoluduenabereziuk21/antolube/',
    //     },
    // ];
    projects: Project[]=[];
    private readonly API_URL = environment.API_URL + environment.END_POINT_PROJECTS;
    constructor(private httpClient:HttpClient){ }

    getProject(id:string):Observable<Project | undefined>{
        const project = this.projects.find(p=> p.id === id);
        return of(project);
    }

    // getProjects(): Observable<Project[]> {
    //    return of(this.projects);
    // }
    //  getAllProjects(): Observable<any> {
    //     const list =this.httpClient.get(this.API_URL).pipe(res=>res);
    //     console.log(list)
    //    return list;
    //  }
    getAllProjects(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.API_URL).pipe(
          map((response: Project[]) => {
            console.log('Proyectos recibidos:', response); // muestra log
            this.projects = response; // Guarda la lista de proyectos
            return response;
          }),
          catchError((error) => {
            console.error('Error al obtener proyectos:', error);
            return of([]); // Retorna un array vacío en caso de error
          })
        );
      }
    
    addproject(projects: Project) {
        this.projects.unshift(projects);
    }
    
}
