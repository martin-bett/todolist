import {Component, NgModule, OnInit} from '@angular/core';
import { ListElement } from './list-element/list-element'
import {ListElementComponent} from "./list-element/list-element.component";
import { CookieService } from "ngx-cookie-service";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public listname : string;
  public elements : Array<ListElement>;
  public cookie : CookieService;

  public cKeyName :string ="ListName";
  public cKeyListElements :string ="ListElements";

  constructor(private cookieService : CookieService) {



    this.cookie = cookieService;

    if(this.cookie.get(this.cKeyName)  != null
      && this.cookie.get(this.cKeyName).length >0
    ){
      this.listname = this.cookie.get(this.cKeyName);
    }else{
      this.listname = "Meine Liste";
    }

    if(this.cookie.get(this.cKeyListElements)!= null
        && this.cookie.get(this.cKeyListElements).length > 0)
    {
      this.elements = JSON.parse(this.cookie.get(this.cKeyListElements));
    }else{
      this.elements = [];
      this.elements.push(new ListElement("Zahnarzt","Geh dir mal die Zähne putzen", new Date(),false ));
      this.elements.push(new ListElement("Geburtstag","Vergiss die Mama nicht", new Date(),false ));
    }

  }

  ngOnInit(): void {

  }

  saveCookieValues() {
    this.cookie.set(this.cKeyListElements,JSON.stringify(this.elements));
    this.cookie.set(this.cKeyName,this.listname);
  }

  setListName(event: Event, value: HTMLInputElement) {
    this.listname = value.value;
    this.saveCookieValues();
  }


  editListElement(index: number) {

  }

  public deleteListItem(element : ListElement) {
    if(this.elements.indexOf(element)>=0){
      this.elements.splice(this.elements.indexOf(element),1);
      this.saveCookieValues();
    }
  }

  public saveListElement() {
    this.saveCookieValues();
  }

  addNewElement() {
    this.elements.push(new ListElement("Name","Beschreibung", new Date(),false));
    this.saveCookieValues();
  }
}
