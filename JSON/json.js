// JavaScript Object Notation
// every valid JSON is valid Object literal,but every valid object literal is not valid JSON.
// JSON.stringify() - convert our javascript object to the serialized json String.
// JSON.parser() - Deserializes JSON string representation to a Javascript object.
var JSONObject={
    "name":"uday",
    "age":25,
    "country":"Bharat"
}
var data={
    name:"kumar",
    city:"hyderabad",
    isAdmin:true
}
// JS object -->Convert to string(for better storage purpose) -->transfer data to server
var JSONStringifyData=JSON.stringify(data);
console.log(JSONStringifyData,typeof JSONStringifyData);
var JSONParseData=JSON.parse(JSONStringifyData);
console.log(JSONParseData, typeof JSONParseData);