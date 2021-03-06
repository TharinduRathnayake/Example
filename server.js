const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
//...........................................CustomerManagment................................................. 

//...........................................CustomerManagmentEnd...............................................



//...........................................StoreManagment................................................. 

//...........................................StoreManagmentEnd...............................................



//...........................................DistributionManagment................................................. 

//...........................................DistributionManagmentEnd...............................................




//...........................................DeliveryManagment................................................. 

//...........................................DeliveryManagmentEnd...............................................



//...........................................UserManagment................................................. 

//...........................................UserManagmentEnd...............................................




//...........................................ShowRoomManagment................................................. 

//...........................................ShowRoomManagmentEnd...............................................




//...........................................FinanceManagment................................................. 

//...........................................FinanceManagmentEnd...............................................




//...........................................OwnerManagment................................................. 

//...........................................OwnerManagmentEnd...............................................


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);

//...........................................CustomerManagment................................................. 

//...........................................CustomerManagmentEnd...............................................



//...........................................StoreManagment................................................. 

//...........................................StoreManagmentEnd...............................................




//...........................................DistributionManagment................................................. 
 //umaya
//...........................................DistributionManagmentEnd...............................................




//...........................................DeliveryManagment................................................. 

//...........................................DeliveryManagmentEnd...............................................



//...........................................UserManagment................................................. 

//...........................................UserManagmentEnd...............................................




//...........................................ShowRoomManagment................................................. 

//...........................................ShowRoomManagmentEnd...............................................




//...........................................FinanceManagment................................................. 

//...........................................FinanceManagmentEnd...............................................




//...........................................OwnerManagment................................................. 

//...........................................OwnerManagmentEnd...............................................


//ssssssssssssssssssssfdghfgdfgfdf
//hjcjfvfdkvgkbgfib


//......................Test 01.........................................................

//umaya



//umaya test03



//.......maniya....
//..........................................uma test.............
//test02222222222222222222222222


//...............................Maniya test run............


//........................uma test

//.......danushi

//..udeshi test run

//.............udeshi test 02




//..........test 03

//...........test 04


const PORT = 8000;
const DB_URL = 'mongodb+srv://itp123:itp123@visioncargo.p4cvw.mongodb.net/VisionCargo?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connected Error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);

});
