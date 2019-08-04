import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

export interface CanComponentDeactive {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({providedIn: 'root'})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {

  canDeactivate(component: CanComponentDeactive,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}