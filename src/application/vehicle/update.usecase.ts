import VehicleRequest from "../../domain/dto/useCaseRequests/vehicleRequest";
import VehicleResponse from "../../domain/dto/useCaseResponses/vehicleResponse";
import VehicleService from "src/domain/services/vehicle.service";
import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "src/domain/ports/vehicle.repository";

@Injectable()
export default class UpdateUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public handler(id:string, vehicle: VehicleRequest): Promise<VehicleResponse>{
        const service = new VehicleService(this.vehicleRepository);
        return service.Update(id,vehicle);
    }
}