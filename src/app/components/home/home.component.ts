import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../../services/interactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private _interactionService:InteractionsService
  ){}

  ngOnInit(): void {   
    this._interactionService.setIsHome(true);
  }
}
