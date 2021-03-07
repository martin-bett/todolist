import { Component, OnInit } from '@angular/core';
import { Listelement } from './listelement'
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listname : string;
  public elements : Array<Listelement>;
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
      this.elements.push(new Listelement("Zahnarzt","Geh dir mal die Zähne putzen", new Date(),false));
      this.elements.push(new Listelement("Geburtstag","Vergiss die Mama nicht", new Date(),false));
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

  deleteListItem(index: number) {
    this.elements.splice(index+1,1);
    this.saveCookieValues();
  }

  saveListElement(index: number) {

    this.saveCookieValues();
  }

  addNewElement() {
    this.elements.push(new Listelement("Name","Beschreibung", new Date(),false));
    this.saveCookieValues();
  }
}
