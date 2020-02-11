import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";
import Vehicle from "../../domain/vehicle";

@Injectable()
export default class DeleteUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(id: string): Promise<Vehicle>{
        return this.vehicleRepository.delete(id);
    }
}