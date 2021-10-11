var data=[
    1,
    "uma",
    true,
    null,
    undefined,
    {
        name:"uday"
    },
    function(name){
        return name;
    },
    ["Red","Blue","Green"]
]
var output=data[6](data[5].name)
console.log(output);
var output1=data[6](data[7][1]);
console.log(output1);