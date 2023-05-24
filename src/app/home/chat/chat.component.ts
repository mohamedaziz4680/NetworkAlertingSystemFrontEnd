import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpServiceService} from "../../services/http-service.service";
import {SendNotification} from "../../models/send-notification.model";
import {User} from "../../models/user.model";
import {HttpResponse} from "@microsoft/signalr";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  notification: String = "";
  // @ts-ignore
  SentTime: Date = null;
  Status: String = "";
  httpService: HttpServiceService;
  usersIds: Number[] = [];
  @Input() users?: User[];
  constructor(httpService: HttpServiceService) {
    this.httpService = httpService;
  }
  sendNotification() {
    if(!this.usersIds.length) {
      alert("you have to enter recipients");
      return;
    }
    if(!this.notification.length) {
      alert("you have to type a notification");
      return;
    }
    let s = new SendNotification(this.notification,this.Status, this.usersIds,this.SentTime )
    this.httpService.sendNotification(s, (response: HttpResponse)=> {
      if (response.statusText == "OK") {
        alert("sucess");
      } else {
        alert("error!");
        console.log(response)
      }
    });
  }
}
