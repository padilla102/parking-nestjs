import { Injectable } from '@nestjs/common';
import { VehicleRepository } from "../../../domain/ports/vehicle.repository";
import { InjectModel } from '@nestjs/mongoose';
import { VehicleEntity } from './entities/vehicle.entity';
import { Model } from "mongoose";
import Vehicle from 'src/domain/dtos/vehicle';
import VehicleMapper from 'src/infrastructure/mapper/vehicle.mapper';

@Injectable()
export default class VehicleRepositoryMongo implements VehicleRepository {
    constructor(
        @InjectModel('Vehicle') private readonly vehicleModel: Model<VehicleEntity>
    ){}

    public async getAll():Promise<Vehicle[]>{
        const vehicles = await this.vehicleModel.find();
        return VehicleMapper.toDomains(vehicles);
    }

    public async getById(id:string): Promise<Vehicle> {
        const vehicle = await this.vehicleModel.findById(id);
        return VehicleMapper.toDomain(vehicle);
    }

    public async create(vehicle:Vehicle): Promise<Vehicle> {
        let vehicleCreated = new this.vehicleModel(vehicle);
        vehicleCreated = await vehicleCreated.save();
        return VehicleMapper.toDomain(vehicleCreated);
    }

    public async update(id:string, vehicle:Vehicle): Promise<Vehicle>{
        const vehicleUpdated = await this.vehicleModel.findByIdAndUpdate(
            id, vehicle, { new: true }
        );
        return VehicleMapper.toDomain(vehicleUpdated);
    }

    public async delete(id:string): Promise<Vehicle> {
        const vehicleDeleted = await this.vehicleModel.findByIdAndDelete(id);
        return VehicleMapper.toDomain(vehicleDeleted);
    }
}