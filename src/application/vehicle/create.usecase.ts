import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";
import Vehicle from "../../domain/vehicle";

@Injectable()
export default class CreateUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(vehicle: Vehicle): Promise<Vehicle>{
        return this.vehicleRepository.create(vehicle);
    }
}