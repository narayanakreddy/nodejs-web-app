var express = require('express'); //including express   
var app = new express(); // Creating instance   
var port = 8085; // setting port for the application   
//Following function is starts sockets and start listen from particular port. In following code I have given call back which contains err. So when port willbe start and listen function will be fire then this function will be execute.   

app.get('/', function(req, res) {  
    res.send('<h1>Hello NodeJs App.</h1>');  
});

app.listen(port, function(err) {  
    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    }  
}); 

