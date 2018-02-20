import { CanActivateChild } from "@angular/router/src/interfaces";

export class AlwaysAuthChildrenGuard implements CanActivateChild {
    canActivateChild(){

        console.log("AlwaysAuthChildrenGuard");
        return true;
    }
}