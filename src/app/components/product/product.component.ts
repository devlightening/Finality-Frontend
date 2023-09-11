import { Component, OnInit } from '@angular/core';
import { Prodcut } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
import { concatWith } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  // product1 = { productId: 1, productName: 'Glass', categoryId: 1, unitPrice: 5, unitInStock: 15 }
  // product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 15, unitInStock: 25  }
  // product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 25,unitInStock: 35  }
  // product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 35,unitInStock: 54  }
  // product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 45,unitInStock: 56  }


  products:Prodcut[] = []
  dataLoaded= false;

  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };

  constructor(private productService:ProductService) {}

  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded= true;
    });
  } 
}
