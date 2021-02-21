import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { IDemo } from "./demo.interface";
import { DEMOS } from "./demos";

@Injectable({
  providedIn: "root"
})
export class DemoService {
  private _demos = DEMOS;
  private _activeDemoSubject$ = new BehaviorSubject<IDemo | undefined>(undefined);
  public activeDemo$ = this._activeDemoSubject$;

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const demoUrl = event.urlAfterRedirects.slice(1); // remove the leading slash
        const activeDemo = this._demos.find(demo => demo.path === demoUrl);
        this._activeDemoSubject$.next(activeDemo);
      }
    });
  }
}
