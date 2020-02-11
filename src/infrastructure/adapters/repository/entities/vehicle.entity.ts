import { Document } from "mongoose";

export interface VehicleEntity extends Document{
    id?:string;
    readonly placa:string;
    readonly cylinder:number;
    readonly vehicleTypeId:string;
    readonly createdAt:Date;
    readonly updatedAt:Date;
}