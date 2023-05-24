import {Data} from "@angular/router";

export class SendNotification {
  public alertTitle: String;
  public status: String;
  public sentTime: Data;

  constructor(AlertTitle: String,Status: String, users: Array<Number>,SentTime: Data) {
    this.alertTitle = AlertTitle;
    this.status = Status;
    this.sentTime = SentTime;
    this.users = users;
  }

  public users: Array<Number>;

}
