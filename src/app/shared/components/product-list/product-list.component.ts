import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() data:any={}
  @Output() item=new EventEmitter
constructor(private router:Router){

}
  isCart:boolean=false;

  add(number:any){
    this.item.emit({item:this.data,quantity:number});
    this.isCart=false;
  }
  details(producrData:any){
    this.router.navigate(['/details',producrData.id])
  }
}
