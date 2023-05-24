import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.model";

import {filter} from "rxjs";
import {SendNotification} from "../models/send-notification.model";
import {XhrHttpClient} from "@microsoft/signalr/dist/esm/XhrHttpClient";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;

  }

  send() {
    this.http.post("https://localhost:7292/notificationhub", {

    }).subscribe(()=>{

    })
  }

  getUsers(callback: Function) : void {
    this.http.get("https://localhost:7292/api/User", {}).subscribe((data) => {
      let users: User[] = data as Array<User>;
      callback(users.filter(x=> x.isOnline));
    })
  }

  sendNotification(object: SendNotification, callback: Function) {
     this.http.post("https://localhost:7292/api/Notification", {
      alertTitle: object.alertTitle,
      usersIds: object.users
    }, {observe: "response"}).subscribe(res => {
      callback(res)
     })
  }
  getNotificationSummary(callback: Function) : void {
    this.http.get("https://localhost:7292/api/Notification", {}).subscribe((data) => {
      let notifications: SendNotification[] = data as Array<SendNotification>;
      callback(notifications);
    })
  }
}
