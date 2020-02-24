import VehicleResponse from "../../domain/dto/useCaseResponses/vehicleResponse";
import VehicleService from "src/domain/services/vehicle.service";
import { Injectable, Inject } from "@nestjs/common";
import { VehicleRepository } from "src/domain/ports/vehicle.repository";

@Injectable()
export default class GetByIdUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public async handler(id:string): Promise<VehicleResponse>{
        const service = new VehicleService(this.vehicleRepository);
        return await service.GetById(id);
    }
}