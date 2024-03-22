import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionsService } from '../../services/interactions.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  isHome: boolean = false;
  private subscription!: Subscription;

  constructor(
    private _interactionService:InteractionsService
  ){}

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
