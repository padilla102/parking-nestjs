import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";
import Vehicle from "../../domain/dtos/vehicle";
import VehicleService from "src/domain/services/vehicle.service";

@Injectable()
export default class CreateUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(vehicle: Vehicle): Promise<Vehicle>{
        console.log(vehicle);
        const service = new VehicleService();
        service.valid(vehicle);
        return this.vehicleRepository.create(vehicle);
    }
}