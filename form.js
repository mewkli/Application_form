const mongoose = require("mongoose");

const CompletePaymentSchema = new CompletePayment().Schema({
    FullName:{ 
        type:string,
        required:true
    },
    
    EmailAddress:{ 
        type:string,
        required:true,
        unique:true
    },

    PhoneNumber:{ 
        type:Number,
        required:true,
        unique:true
    },

    Age:{ 
        type:Number,
        required:true,
    },

    Gender:{ 
        type:string,
        required:true
    },

    Address:{ 
        type:string,
        required:true
    },

    Batch:{ 
        type:string,
        required:true
    },

    City:{ 
        type:string,
        required:true
    },

    Payment:{ 
        type:number,
        required:true
    },

})

const Form = new mongoose.model("form",CompletePaymentSchema);

module.exports= Form;