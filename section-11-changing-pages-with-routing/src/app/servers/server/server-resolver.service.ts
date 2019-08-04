import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { ServersService } from "../servers.service";

// Would be better to put this in its own file
interface Server {
  id: number,
  name: string,
  status: string
}

@Injectable({providedIn: 'root'})
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Server> |
          Promise<Server> | 
          Server {
    return this.serversService.getServer(+route.params['id']);
  }
}