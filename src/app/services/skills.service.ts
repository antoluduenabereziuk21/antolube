import { Injectable } from "@angular/core";
import { Skill } from "../models/skill.model";
import { of,Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SkillService {
    skills:Skill[] = [
        {
            name:'Java',
            image:'../../assets/logos/java2.png'
        },
        {
            name:'Spring',
            image:'../../assets/logos/spring-boot.svg'
        },
        {
            name:'Docker',
            image:'../../assets/logos/docker.svg'
        },
        {
            name:'Maven',
            image:'../../assets/logos/maven-svg.svg'
        },
        {
            name:'Git',
            image:'../../assets/logos/git.svg'
        },
        {
            name:'PostgreSQL',
            image:'../../assets/logos/postgresql.svg'
        },
        {
            name:'MySQL',
            image:'../../assets/logos/mysql.png'
        },
        {
            name:'Postman',
            image:'../../assets/logos/postman.svg'
        },
        {
            name:'Swagger',
            image:'../../assets/logos/swagger.svg'
        },
        {
            name:'JWT',
            image:'../../assets/logos/jwt.svg'
        },
        {
            name:'NodeJS',
            image:'../../assets/logos/nodejs.svg'
        },
        {
            name:'JavaScript',
            image:'../../assets/logos/js.png'
        },
        {
            name:'TypeScript',
            image:'../../assets/logos/typescript.svg'
        },
        {
            name:'WAWebSockets',
            image:'../../assets/logos/WAWebSockets.png'
        },
        {
            name:'Angular',
            image:'../../assets/logos/angular.png'
        },
        {
            name:'VsCode',
            image:'../../assets/logos/vscode.svg'
        },{
            name:'ApacheNetBeans',
            image:'../../assets/logos/netbeans.png'
        },{
            name:'IntelliJ',
            image:'../../assets/logos/intellijidea.svg'
        },{
            name:'Linux',
            image:'../../assets/logos/linux.svg'
        },


        
    ];
    constructor (){}
    getSkills():Observable<Skill[]>{
        return of(this.skills);
    }
    addSkill(skills : Skill){
        this.skills.unshift(skills);
    }
}