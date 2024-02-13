


const express=require('express');
const bodyParser=require('body-parser');
const apiRoutes=require('./src/router/routes');
const {sequelize,connectToDataBase}=require('./src/config/connectDB');

// cretae express app
const app=express();
const port=5000;

// configure app to use bodyParser
// this will let us get the data from a POST 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// use the router
app.use('/api',apiRoutes);



// require the connection DB
const db=require('./src/config/connectDB');

//Home Page 
app.get('/',(req,res) =>{



});



app.use((req,res) =>{
    res.status(404).json({
        message:'Not Found'
    });
        
   
});

app.use((req,res) =>{
    res.status(500).json({
        message:'Something went wrong!'
    });
        
   
});
// star the server 
app.listen(5000,async() =>{
    console.log(`Server is Running on port ${port}`);
    await connectToDataBase();
    
}
    );

