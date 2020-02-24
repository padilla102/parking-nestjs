import { Injectable, Inject } from "@nestjs/common";
import VehicleResponse from "../../domain/dto/useCaseResponses/vehicleResponse";
import VehicleService from "src/domain/services/vehicle.service";
import { VehicleRepository } from "src/domain/ports/vehicle.repository";

@Injectable()
export default class DeleteUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(id: string): Promise<VehicleResponse>{
        const service = new VehicleService(this.vehicleRepository);
        return service.Delete(id);
    }
}