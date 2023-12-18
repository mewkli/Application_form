const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/yogaAdmission",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('connectin successful');
}).catch((e)=>{
    console.log('no connection');
})