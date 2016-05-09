import {Component} from '@angular/core';
import {ProductsComponent} from './products.component';
import {BasketComponent} from './basket.component';
import {ProductsService} from './products.service';
import {LocationService} from './customerLocation.service';
import {CatalogueService} from './catalogue.service';
import {CheckoutComponent} from './checkout.component';
import {CookieService} from './cookie.service';
@Component({
    selector: 'my-app',
    template: `
        <div [hidden]="!isSelection"> 
            <h1>Product selection</h1>
            <table>
                <tr class=".row">
                    <span *ngFor="let products of categories">
                        <td class=".col-md-1" ><products  [category]="products[0].category" [products]="products" (changeProduct)="onSelectionProductsChange($event)"></products></td>
                    </span>
                    <td id='basket' class=".col-md-4"><basket [selectedProducts]="selectedProducts" (checkoutProducts)="onCheckout($event)"></basket></td>
                </tr>    
            </table>
            <h3 id='errorMsg' *ngIf="errorMsg!=''">{{errorMsg}}</h3>
        </div>
        <div *ngIf="confirmationMsg==''&& !isSelection">
            <checkout [customerId]="customerId" [selectedProducts]="selectedProducts" (confirmation)="onConfirmation($event)"></checkout>
        </div>
        <h3 id='confirmationMsg' *ngIf="confirmationMsg!=''">{{ confirmationMsg }}</h3>
    `,
    directives: [ProductsComponent, BasketComponent,CheckoutComponent],
    providers: [CookieService,ProductsService,LocationService, CatalogueService]
})

export class AppComponent {
    isSelection:boolean=true; //to dinamically display the checkout
    customerId:number; //to get from cookie 
    mapSelectedProducts:Array<Object>[]=[]; //map of selected products
    selectedProducts:Array<Object>; //flatten array of selected products from different categories
    categories:Array<Object>; //list of products
    
    errorMsg:String=""; //error if user is not found
    confirmationMsg:String=""; //confirmation after checkout
    
    //populate products by customerid and location
    constructor( cookieService:CookieService, productsService: ProductsService,  locationService: LocationService, catalogueService: CatalogueService){
        this.customerId=parseInt(cookieService.getCookie('customerId'));
        if(isNaN(this.customerId)){
            this.customerId=1;
        }
        try {
             let catalogue:Array<Object>, location:String;
             location=locationService.getLocation(this.customerId);
             catalogue=catalogueService.getCatalogue(location);
             this.categories=productsService.getProducts(catalogue);//getting lists of products by category to dinamically populate the table
        } catch (error) {
            if(error.name === 'UserError'){
                this.errorMsg=error.message;
            }
        }
    }
    
    //change the status of selected products for each component of the table
    onSelectionProductsChange($event:any){
        this.mapSelectedProducts[$event.category]=$event.selected;
        //flatten the map in array for ngfor (not ideal)
        this.selectedProducts=[];
        for (var key in this.mapSelectedProducts) {
            if (this.mapSelectedProducts.hasOwnProperty(key)) {
                this.selectedProducts= this.selectedProducts.concat(this.mapSelectedProducts[key]);
            }
        }   
    }
    
    //change the layout of template if ready for checkout confirmation
    onCheckout($event:any){
       this.isSelection=$event.confirmed;
    }
    
    //change the layout of template when checkout is successful
    onConfirmation($event:any){
        if($event.confirmed){
            this.confirmationMsg="Thank you for your purchase";
        }
        else{
            this.isSelection=true;
            this.confirmationMsg="";
       }
    }
}