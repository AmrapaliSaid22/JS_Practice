const accountId = 101

let accountEmail = "test101@gmail.com"

var accountPass = "15963"

 accountCity = "Pune"

//  accountId = 58    //not allowed
accountEmail = "google098@gmail.com"

accountPass = "95147"

accountCity = "Mumbai"

 console.log(accountId);

//  prefer not to use "var"
//  becase of issue in block scope and functional scope
 
 console.table([accountEmail, accountPass, accountCity]);