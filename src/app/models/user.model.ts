export class User {
    public id: Number;
  public name: Number;
  public isOnline: boolean;

  constructor(id: Number, name: Number, isOnline: boolean) {
    this.id = id;
    this.name = name;
    this.isOnline = isOnline;
  }
}
