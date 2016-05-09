import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'products',
    template: `
        <h2>{{ category }}</h2>
        <h3>{{ customerId }}</h3>
        <li *ngFor="let product of products">
            <input type="checkbox"
                id="productsId{{product.key}}"  
                (change)="onChange($event, product)"
                [(ngModel)]="product['checked']"
                /> {{ product.value }}
        </li>
    `
})

export class ProductsComponent { 
    @Input() customerId:number;
    @Input() products:Array<Object>;
    @Input() category:Array<Object>;
    @Output() changeProduct= new EventEmitter();
    
    selectedProducts:Array<Object>=[];
    
    onChange($event:any, product:Object){
        let index = this.selectedProducts.indexOf(product);
        if($event.target.checked){
            //add to selected products
            if(index==-1){
                this.selectedProducts.push(product);
            }
        }else{
            //remove from selected products
            if(index > -1){
                this.selectedProducts.splice(index, 1);
            }
        }
        this.changeProduct.emit({selected: this.selectedProducts, category: this.category});
    }
}
