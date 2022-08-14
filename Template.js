//Postman script template by Mino Rand
//Note : to use it copy paste to the test part and adapt the variable value

//What : use a variable in a request
//Where : Request, authorization, body, header depending on the case
"id:""{{objectId}}"",
..."	

//What : Save data in a result to use it later
//Where : Test (request)
pm.environment.set("objectId", jsonData.id);	

//What : Check that the result of the call is an HTTP code (200, 500, 401)
//Where : Test (main folder to avoid rewriting it on each request)
"pm.test(""Status code is 200"", function () { pm.response.to.have.status(200);});"

//What : Check that the call result contains a field with a fixed expected value
//Where : Test (request)
"pm.test(""the id is 30"", function () {var jsonData = pm.response.json();pm.expect(jsonData.id).to.eql(30);});"

//What : Check that the result contains a data
//Where : Test (request)
 "pm.test(""the pet status is available"", function () {
    var jsonData = pm.response.json();
    var status = pm.environment.get(""petStatus"");
    pm.expect(jsonData).to.include(status);});"
   
//What : Check that the response time is correct
//Where : Test (main folder to avoid rewriting it on each request)
"pm.test(""Response time is less than 800ms"", function () {pm.expect(pm.response.responseTime).to.be.below(800);});"	

//What : Create unique value	
//Where : Request, authorization, body, header depending on the case
"name": "TigerMino {{$timestamp}}",

//What : Pass standard random generated test data in standard fields (address, phone number, surname, first name, IBAN), see in Postman the possible data
//Where : Request, authorization, body, header depending on the case
"{{$randomStreetAdress}}{{random..."	

//What : Check that a field has a precise value known in advance	
//Where : Test (request)
"pm.expect(pm.response.json().errorLabel).to.eql(""Pet doesnt exist"")"	

//What : declare the response to use it later	
//Where :Test (request)
var jsonData = pm.response.json();

//What : wait for 1s
//Where : Pre request or Test
setTimeout(function(){}, 1000);	

//What : Automatically get a randomized Id from a list of items
//Where : Test (request)
"var jsonData = pm.response.json();
var contentLength =  jsonData.content.length;
if(contentLength > 0) {
    var randomItem =  Math.floor(Math.random() * contentLength) + 0;
    pm.environment.set(""PetId"", jsonData.content[randomItem].id);
}"	

//What : Wait until after a specific date
//Where : Pre request or Test
"var moment = require(""moment"");
let currentTime = moment.valueOf();
let dateToReach = pm.environment.get(""TargetDate"");
let dateToReachValue = moment(dateToReach).valueOf();
if(currentTime < dateToReachValue ) setTimeout(function(){}, dateToReachValue - currentTime + 1000);"
