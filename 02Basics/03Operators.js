// + - * / % 
// Discount = ( List Price - Selling Price )/List Price  * 100

var sellingPrice = 199;
var listingPrice=799;
var discountPercent = ((listingPrice - sellingPrice)/listingPrice) *100;

console.log("Discount percentage is : ",discountPercent);
var displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage , "% OFF");

var result =listingPrice > sellingPrice;
console.log(result);
console.log(typeof result);






















