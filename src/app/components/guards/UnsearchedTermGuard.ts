import { CanDeactivate } from "@angular/router/src/interfaces";
import { SearchComponent } from "../search/search.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";


export class UnsearhedTermGuard implements CanDeactivate<SearchComponent>{
    canDeactivate(component : SearchComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ){
            console.log("UnsearhedTermGuard");
            console.log("route : " + route.params);
            console.log("state : " + state.url);
            return component.canDeactivate() || window.confirm("Are you sure?");

    }
}