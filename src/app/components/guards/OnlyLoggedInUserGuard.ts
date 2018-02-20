import { UserService } from './../../services/user-service';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router/";


@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {
    
    constructor(private userService: UserService){}

    canActivate(){
        console.log("OnlyLoggedInUserGuard");
        if(this.userService.isLoggdIn()){
        return true;
        }else{
            window.alert("You don't have permission to ciew this page");
            return false;
        }
    }
}