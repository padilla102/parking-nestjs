import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";
import Vehicle from "../../domain/vehicle";

@Injectable()
export default class UpdateUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(id:string, vehicle: Vehicle): Promise<Vehicle>{
        return this.vehicleRepository.update(id,vehicle);
    }
}