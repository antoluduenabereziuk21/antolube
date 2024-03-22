import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionsService } from '../../services/interactions.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isHome: boolean = false;
  private subscription!: Subscription;

  constructor(
   //private subscription:Subscription,
    private _interactionService:InteractionsService) { }

  ngOnInit(): void {

    // this.subscription = this.interactionSerive.updateEnviromentObservable$.subscribe((isInHome:boolean)=>{
    //   this.isInHome = isInHome;
    // })
    this.subscription = this._interactionService.isHome$.subscribe(isHome => {
      this.isHome = isHome;
    });

  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }


}
