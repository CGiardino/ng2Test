export class ProductsService {
    //return products mapped by category
    getProducts(catalogue:Array<Object>) : Array<Object>{
        let products:Array<Object>[]=[];
        catalogue.forEach(product => {
            if (product.hasOwnProperty('category')) {
                var category = product['category'];
                if(products[category]==null){
                    products[category]=[];
                }
                    products[category].push(product);
            }
        });
        
        var toReturn:Array<Object>[]=[];
        for (var category in products) {
            if (products.hasOwnProperty(category)) {
                toReturn.push(products[category]);
            }
        }
        return toReturn;
    }
}