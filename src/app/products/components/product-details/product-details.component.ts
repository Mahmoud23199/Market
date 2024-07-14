import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  singleProduct:any
  isLoading:boolean=true;
  constructor(private activeRouter:ActivatedRoute,private productService:ProductsService){

  }
  ngOnInit(): void {
    let id = this.activeRouter.snapshot.paramMap.get('id');
    this.getProductById(id);
  }

  
  getProductById(id:any){
    this.isLoading=true;
    this.productService.getProductById(id).subscribe(
      (data)=>{
       this.singleProduct=data;
       this.isLoading=false
       console.log(data)
      },
      (error)=>{
         console.log(error)
      }
    )};

}
