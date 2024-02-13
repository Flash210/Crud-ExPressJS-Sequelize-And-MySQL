


const express=require('express');
const bodyParser=require('body-parser');


// cretae express app
const app=express();
const port=5000;

// configure app to use bodyParser
// this will let us get the data from a POST 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



// require the connection DB
const db=require('./src/config/connectDB');

//Home Page 
app.get('/',(req,res) =>{


res.send('Ahla Bik aad :)')

});

// star the server 
app.listen(5000,() =>console.log(`Server is Running on port ${port}`));

