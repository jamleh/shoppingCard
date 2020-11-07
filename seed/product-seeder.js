var Product = require('../models/product');
var mongoose= require('mongoose');
//mongoose.connect('localhost:27017/shopping', {useNewUrlParser: true}); 
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true }); // solving depricated functions 
var products =[ 
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kalani_Pe%27a_Grammy_Award_Statue_2017.jpg",
        title:"Grammy",
        description:'Awsome!!!!',
        price:10
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kalani_Pe%27a_Grammy_Award_Statue_2017.jpg",
        title:"Grammy",
        description:'Awsome!!!!',
        price:10
    })
        
];
var done=0;
for( var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done==products.length){
          exit();
        }
    });
}

function exit(){
    mopgoose.disconnect();
}

