import { Component } from '@angular/core';
import {HttpServiceService} from "../services/http-service.service";
import {SendNotification} from "../models/send-notification.model";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  // @ts-ignore
  public notifications: SendNotification[];
 constructor(httpService: HttpServiceService) {

   httpService.getNotificationSummary((data: SendNotification[]) => {
     this.notifications = data;
     console.log(this.notifications)
 })
}
}
