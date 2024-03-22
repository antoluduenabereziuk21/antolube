import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class InteractionsService {


//   private updateEnviromentSubject = new Subject<boolean>();
//   updateEnviromentObservable$ = this.updateEnviromentSubject.asObservable();

//   updateEnviroment(isInHome:boolean) {
//     this.updateEnviromentSubject.next(isInHome);
//   }

// }
// @Injectable({
//   providedIn: 'root'
// })
// export class InteractionsService {

//   private isHomeSubject = new BehaviorSubject<boolean>(false);
//   isHome$ = this.isHomeSubject.asObservable();

//   setIsHome(value: boolean) {
//     this.isHomeSubject.next(value);
//   }

//   getIsHome(): boolean {
//     return this.isHomeSubject.getValue();
//   }
//   constructor(private router: Router) {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe((event: NavigationEnd) => {
//       this.isHomeSubject.next(event.url === '/home');
//     });
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  private isHomeSubject = new BehaviorSubject<boolean>(false);
  isHome$ = this.isHomeSubject.asObservable();

    setIsHome(value: boolean) {
    this.isHomeSubject.next(value);
  }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomeSubject.next(event.url === '/home');
    });
  }
}
