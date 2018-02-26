var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/portfoliodb';

mongoose.connect(urlString,function(err,res){
    if(err){
        console.log('Error while connecting to ' + urlString + " . ERROR: " + err);
    }else{
        console.log('Succeeded connected to ' + urlString);
    }
});