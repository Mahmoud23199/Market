import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() data:any={}
  @Output() item=new EventEmitter

  add(){
    this.item.emit(this.data);
  }
}
