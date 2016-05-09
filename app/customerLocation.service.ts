export class LocationService {
    //stub of customers list
    customers= [{key:1, location:"LONDON"},
                {key:2, location:"LONDON"},
                {key:3, location:"LIVERPOOL"}];
                 
    getLocation(customerId:number): String{
        for (var index = 0; index < this.customers.length; index++) {
            let customer = this.customers[index];
            if (customer.hasOwnProperty('key')) {
                let id = customer['key'];
                if(id===customerId){
                    return customer['location'];
                }
            }
        }  
        //if customer is not retrieved
        throw new UserError("There was a problem retrieving the customer information");
    }
}

export class UserError{
    name:String;
    message:String;
    constructor(message:String){
       this.name = 'UserError';
       this.message = message;
   }
}

