import { Injectable, Inject } from "@nestjs/common";
import VehicleRequest from "../../domain/dto/useCaseRequests/vehicleRequest";
import VehicleResponse from "../../domain/dto/useCaseResponses/vehicleResponse";
import VehicleService from "src/domain/services/vehicle.service";
import { VehicleRepository } from "src/domain/ports/vehicle.repository";

@Injectable()
export default class CreateUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public async handler(vehicleReq: VehicleRequest): Promise<VehicleResponse> {
        console.log(vehicleReq);
        const service = new VehicleService(this.vehicleRepository);
        return await service.Create(vehicleReq);
    }
}