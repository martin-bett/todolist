
export class Listelement {
  public title : string;
  public description : string;
  public duedate : Date;
  public status: boolean;

  public constructor(title: string , desc: string , date: Date , status: boolean ) {

    this.status = status;
    this.title = title;
    this.description = desc;
    this.duedate = date;
  }


}
