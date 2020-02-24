import { Injectable } from '@nestjs/common';
import { VehicleRepository } from "../../../domain/ports/vehicle.repository";
import { InjectModel } from '@nestjs/mongoose';
import { VehicleEntity } from './entities/vehicle.entity';
import { Model } from "mongoose";
import VehicleRequest from 'src/domain/dto/useCaseRequests/vehicleRequest';
import VehicleResponse from 'src/domain/dto/useCaseResponses/vehicleResponse';
import VehicleMapper from 'src/infrastructure/mapper/vehicle.mapper';

@Injectable()
export default class VehicleRepositoryMongo implements VehicleRepository {
    constructor(
        @InjectModel('Vehicle') private readonly vehicleModel: Model<VehicleEntity>
    ){}

    public async getAll():Promise<VehicleResponse[]>{
        const vehicles = await this.vehicleModel.find();
        return VehicleMapper.toDomains(vehicles);
    }

    public async getById(id:string): Promise<VehicleResponse> {
        const vehicle = await this.vehicleModel.findById(id);
        return VehicleMapper.toDomain(vehicle);
    }

    public async create(vehicle:VehicleRequest): Promise<VehicleResponse> {
        let vehicleCreated = new this.vehicleModel(vehicle);
        vehicleCreated = await vehicleCreated.save();
        return VehicleMapper.toDomain(vehicleCreated);
    }

    public async update(id:string, vehicle:VehicleRequest): Promise<VehicleResponse>{
        const vehicleUpdated = await this.vehicleModel.findByIdAndUpdate(
            id, vehicle, { new: true }
        );
        return VehicleMapper.toDomain(vehicleUpdated);
    }

    public async delete(id:string): Promise<VehicleResponse> {
        const vehicleDeleted = await this.vehicleModel.findByIdAndDelete(id);
        return VehicleMapper.toDomain(vehicleDeleted);
    }
}