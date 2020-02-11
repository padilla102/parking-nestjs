import { Schema } from 'mongoose';

const VehicleSchema = new Schema({
    placa: {
        type:String, 
        trim: true,
        required: true,
        unique: true
    },
    cylinder:{
        type:Number, 
        required: true
    },
    vehicleTypeId:{
        type:String, 
        required: true
    }
},{
    timestamps:true
});

export default VehicleSchema;