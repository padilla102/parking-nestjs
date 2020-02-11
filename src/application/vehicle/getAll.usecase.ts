import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";
import Vehicle from "../../domain/vehicle";

@Injectable()
export default class GetAllUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(): Promise<Vehicle[]>{
        return this.vehicleRepository.getAll();
    }
}