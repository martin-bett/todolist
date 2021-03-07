import { Component, Input,Output ,EventEmitter} from '@angular/core';
import {ListElement} from "./list-element";


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})

 export class ListElementComponent  {
  @Input() data!: ListElement;
  @Output() saveEvent = new EventEmitter<ListElement>();
  @Output() deleteEvent = new EventEmitter<ListElement>();
  //('app-list-element')

  deleteItem(){
    this.deleteEvent.emit(this.data);
  }

  saveItem(){
    this.saveEvent.emit(this.data);
  }
}
