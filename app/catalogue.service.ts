export class CatalogueService {
    //stub of product list
    catalogue= [{key:1, category:"Sports", value:"Arsenal TV", location:"LONDON"},
                 {key:2, category:"Sports", value:"Chelsea TV", location:"LONDON"},
                 {key:3, category:"Sports", value:"Liverpool TV", location:"LIVERPOOL"},
                 {key:4, category:"News", value:"Sky News"},
                 {key:5, category:"News", value:"Sky Sports News"}];
                 
    //return all the products based on locationId
    getCatalogue(locationId:String) : Array<Object>{
        let result:Array<Object>=[];
        this.catalogue.forEach(product => {
            if (product.hasOwnProperty('location')) {
                var location = product['location'];
                if(location===locationId){
                    result.push(product);
                }
            }else{
                result.push(product);
            }
        });
        return result;
    }
}