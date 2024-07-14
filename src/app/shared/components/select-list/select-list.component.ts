import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent {
  @Input() title:string="";
  @Input() data:any[]=[];
  @Output() selectedValue=new EventEmitter;
  constructor(){

  }

  selectChange(change:any){
      this.selectedValue.emit(change)
  }

}
