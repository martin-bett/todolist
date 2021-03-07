import {ListComponent} from "../list.component";

export class ListElement {

  public title : string;
  public description : string;
  public duedate : Date | null;
  public status: boolean;
  public edit: boolean = false;

  public constructor(title: string , desc: string , date: Date , status: boolean ) {
    this.status = status;
    this.title = title;
    this.description = desc;
    this.duedate = date;
  };

  public saveListElement(edit_title: HTMLInputElement, edit_desc: HTMLInputElement, edit_date: HTMLInputElement) {
    this.title = edit_title.value;
    this.description = edit_desc.value;
    this.duedate = new Date(edit_date.value);
  }
  public deleteListItem() {
    //this.fatherList.deleteListItem(this);
  }

}
