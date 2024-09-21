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
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/java2_u4LyWTUi8.png'
        },
        {
            name:'Spring',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/springboot_nlBd8gsVf.svg'
        },
        {
            name:'Docker',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/docker_hCTGdkmNs.svg'
        },
        {
            name:'Maven',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/mavensvg_U3TgcO2u2.svg'
        },
        {
            name:'Git',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/git_OpteeH0yd.svg'
        },
        {
            name:'PostgreSQL',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/postgresql_0JcHaa4YN.svg'
        },
        {
            name:'MySQL',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/mysql_G69su1Fqi.png'
        },
        {
            name:'MongoDB',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/mongodb-svgrepo-com_acQe9E64y.svg'
        },
        {
            name:'Postman',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/postman_EOu3oQ9mSt.svg'
        },
        {
            name:'Swagger',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/swagger_uy8pANw1z.svg'
        },
        {
            name:'JWT',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/jwt_PQ_au4ipB.svg'
        },
        {
            name:'NodeJS',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/nodejs_x14ktowZ-.svg'
        },
        {
            name:'JavaScript',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/js_BbmIT4xMN.png'
        },
        {
            name:'TypeScript',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/typescript_CR_MjmVhx.svg'
        },
        {
            name:'WAWebSockets',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/WAWebSockets_7VS6_3hZF.png'
        },
        {
            name:'Angular',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/angular_asUReQH_z.png'
        },
        {
            name:'VsCode',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/vscode_b_cluOYnq.svg'
        },{
            name:'ApacheNetBeans',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/netbeans_Z4aj_toJww.png'
        },{
            name:'IntelliJ',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/intellijidea_9cmiwlWso.svg'
        },{
            name:'Linux',
            image:'https://ik.imagekit.io/dkyrnxtpj0h/assets/logos/linux_baqvd5R2U.svg?updatedAt=1711132833663'
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