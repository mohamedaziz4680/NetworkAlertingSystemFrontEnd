import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRServicesService {
  // @ts-ignore
  private hubConnection: HubConnection;

  public connect = () => {
    this.startConnection();
  }

  constructor() {
  }


  private getConnection(): HubConnection {
    return new HubConnectionBuilder()
      .withUrl("https://localhost:7292/notificationhub", {skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();
  }

  private startConnection() {
    this.hubConnection = this.getConnection();
    this.hubConnection.start()
      .then(() => console.log('connection started'))
      .catch((err) => console.log('error while establishing signalr connection: ' + err))
    this.hubConnection.on("UserConnected", ()=> {

    });
    this.hubConnection.on("UserDisconnected", ()=> {

    })
  }

  public getHub() {
    return this.hubConnection;
  }
}
