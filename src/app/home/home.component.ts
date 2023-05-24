import { Component } from '@angular/core';
import {SignalRServicesService} from "../services/signal-rservices.service";
import {HttpClient} from "@angular/common/http";
import {HttpServiceService} from "../services/http-service.service";
import {User} from "../models/user.model";
import {HubConnection} from "@microsoft/signalr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @ts-ignore
  public users: User[];
  public hub: HubConnection;
  constructor(service: SignalRServicesService, httpService: HttpServiceService) {
    service.connect();
    httpService.getUsers((data: User[]) => {
        this.users = data;
    });
    this.hub = service.getHub();
    this.hub.on("UserConnected", () => {httpService.getUsers(
      (data: User[]) => {
        this.users = data;
      }
    )});
    this.hub.on("UserDisconnected", () => {httpService.getUsers(
      (data: User[]) => {
        this.users = data;
      }
    )})
  }


}
