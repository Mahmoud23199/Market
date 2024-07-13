import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  products:any[]=[];
  categorys:any[]=[];
  loading:boolean=false
 
  constructor(private productService:ProductsService,private categoryService:CategoryService){

  }
  ngOnInit(): void {
     this.getProducts ();
     this.getCategory();
  }

  getProducts()
  {
    this.loading=true;
    this.productService.getAllProducts().subscribe(
    (data)=>{
      this.products=data
     this.loading=false;
      console.log(this.products);
    },
    (error)=>{
      console.error('Error fetching products:', error);
    }
    )
  }

  getCategory(){
    this.categoryService.getAllCategory().subscribe(
      (data)=>{
       this.categorys=data;
       console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

getProductByCategory(categoryChange:any){
  this.loading=true;
  this.productService.getProductByCategory(categoryChange).subscribe( (data)=>{
    this.products=data;
    this.loading=false;
    console.log(data)
   },
   (error)=>{
     console.log(error)
   })

}
categoryChange(event:any){
  if(event.target.value!="all"){
   this.getProductByCategory(event.target.value);
  }else{
    this.getProducts();
  }
 }

}