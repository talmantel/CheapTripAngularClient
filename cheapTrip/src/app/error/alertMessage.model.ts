export class AlertMessage {
  constructor(
    public type: string,
    public header: string,
    public text: string,
    public buttons: Button[]
  ) {}
}
export class Button {
  constructor(public buttonType: string, public buttonText: string) {}
}
