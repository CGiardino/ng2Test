//Given
describe('If the customer goes on Product selection', function () {
  
  var expectedConfirmation = 'Thank you for your purchase';
  
   beforeEach(function () {
      browser.get('');
   });
    
  //When
  describe('When he selects or unselects a product', function () {
    //Then
    it('The basket is updated to show the selected products in London', function(){
      browser.manage().addCookie("customerId", "1");
      browser.get('');
      var el2 = element(by.css('[id="productsId2"]'));
      el2.click();
      var basketEl2=element(by.css('[id="basketProduct2"]'));
      expect(basketEl2.isPresent()).toBe(true);
      el2.click();
      expect(basketEl2.isPresent()).toBe(false);
      var el5 = element(by.css('[id="productsId5"]'));
      el5.click();
      var basketEl5= element(by.css('[id="basketProduct5"]'));
      expect(basketEl5.isPresent()).toBe(true);
      el5.click();
      expect(basketEl5.isPresent()).toBe(false);      
    });
    //Then
    it('The basket is updated to show the selected products in Liverpool', function(){
      browser.manage().deleteCookie('customerId');  
      browser.manage().addCookie("customerId", "3");
      browser.get('');
      var el3 = element(by.css('[id="productsId3"]'));
      el3.click();
      var basketEl3=element(by.css('[id="basketProduct3"]'));
      expect(basketEl3.isPresent()).toBe(true);
      el3.click();
      expect(basketEl3.isPresent()).toBe(false); 
      browser.manage().deleteCookie('customerId');     
    });
    //Then
    it('The basket is empty with error message when client id is not retrieved', function(){
      browser.manage().deleteCookie('customerId');  
      browser.manage().addCookie("customerId", "4");
      browser.get('');
      var errorMsg = element(by.css('[id="errorMsg"]'));      
      expect(errorMsg.isPresent()).toBe(true);
      browser.manage().deleteCookie('customerId');     
    });
    //Then
    it('The error message is hidden when customer id is valid', function(){
      browser.manage().addCookie("customerId", "1");
      browser.get('');
      var errorMsg = element(by.css('[id="errorMsg"]'));      
      expect(errorMsg.isPresent()).toBe(false);    
    });
   });

  //When
  describe('When he chooses checkout', function () {
   
    //Then
    it('he is taken to the confirmation page', function(){
      var el1 = element(by.css('[id="productsId1"]'));
      el1.click();
      var checkout = element(by.css('[id="checkout"]'));
      checkout.click();
      var confirm = element(by.css('[id="confirm"]'));
      confirm.click();
      var confirmation = element(by.css('[id="confirmationMsg"]'));
      expect(confirmation.getText()).toEqual(expectedConfirmation);
    })
  });
 
 //When
 describe('When he chooses checkout', function () {
    //Then
    it('the customer id and selected products are posted to the confirmation page', function(){
      var el1 = element(by.css('[id="productsId1"]'));
      el1.click();
      var checkout = element(by.css('[id="checkout"]'));
      checkout.click();
      var checkoutProduct1 = element(by.css('[id="checkoutProduct1"]'));
      expect(checkoutProduct1.isPresent()).toEqual(true);
      var clientId = element(by.css('[id="clientId"]'));
      expect(clientId.isPresent()).toEqual(true);
    })
  });
  
 //When
 describe('When he chooses checkout and cancel', function () {
    //Then
    it('the previous selected products need to be checked', function(){
      var el1 = element(by.css('[id="productsId1"]'));
      el1.click();
      var el2 = element(by.css('[id="productsId2"]'));
      el2.click();
      var checkout = element(by.css('[id="checkout"]'));
      checkout.click();
      var checkoutProduct1 = element(by.css('[id="checkoutProduct1"]'));
      expect(checkoutProduct1.isPresent()).toEqual(true);
      var checkoutProduct2 = element(by.css('[id="checkoutProduct2"]'));
      expect(checkoutProduct2.isPresent()).toEqual(true);
      var cancel = element(by.css('[id="cancel"]'));
      cancel.click();
      var basketEl1=element(by.css('[id="basketProduct1"]'));
      expect(basketEl1.isPresent()).toBe(true);
      var basketEl2=element(by.css('[id="basketProduct2"]'));
      expect(basketEl2.isPresent()).toBe(true); 
    })
  });
  
});
