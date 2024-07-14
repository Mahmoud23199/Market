import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectListComponent } from './components/select-list/select-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectListComponent,
    ProductListComponent
  ]
})
export class SharedModule { }
