const accountId = 144553 //use
let accountEmail = "shreya.n3000@gmail.com" //use
var accountPassword = "12345" // don't use
accountCity = "Bangalore" // valid but don't use
let accountState //undefined

// accountId = 2 // not allowed

accountEmail = "sharath@gmail.com"
accountPassword = "4567"
accountCity = "mysore"
 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
prefer not to use var because of issue in block scope and functional scope
 */
