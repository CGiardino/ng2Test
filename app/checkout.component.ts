import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'checkout',
    template: `
        <h3>Checkout list for customer id <span id="clientId"> {{customerId}} </span> </h3>
        
        <li *ngFor="let product of selectedProducts">
            <a href="#" class="small" data-value="-1" tabIndex="-1" id="checkoutProduct{{ product.key }}">
                {{ product.value }}
            </a>
            
        </li>
        
        <button id='confirm' type="button" (click)="onConfirmation($event, true)"> Confirm </button>
        <button id='cancel' type="button" (click)="onConfirmation($event, false)"> Cancel </button>
    `
})
export class CheckoutComponent { 
    @Input() selectedProducts: Object[]=[];
    @Input() customerId: String;
    @Output() confirmation= new EventEmitter();
    onConfirmation($event:Object, isConfirmed:boolean){
        this.confirmation.emit({confirmed: isConfirmed});
    }
   
}
