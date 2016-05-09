import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'basket',
    template: `
        <h2>{{ title }}</h2>
        <li *ngFor="let product of selectedProducts">
            <span id="basketProduct{{ product.key }}">
                {{ product.value }}
            </span>
        </li>
        <button *ngIf="selectedProducts!=null && selectedProducts!=''" 
            id="checkout"
            type="button"  
            (click)="onChange($event, sport)">Checkout
        </button>
    `
})
export class BasketComponent { 
    title ="Basket";
    @Input() selectedProducts:Object[]=null;
    @Output() checkoutProducts= new EventEmitter();
    onChange($event:Object, isConfirmed:boolean){
        this.checkoutProducts.emit({confirmed: isConfirmed});
    }

}
