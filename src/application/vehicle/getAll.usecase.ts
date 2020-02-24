import VehicleResponse from "../../domain/dto/useCaseResponses/vehicleResponse";
import VehicleService from "src/domain/services/vehicle.service";
import { Inject, Injectable } from "@nestjs/common";
import { VehicleRepository } from "src/domain/ports/vehicle.repository";

@Injectable()
export default class GetAllUseCase{
    constructor(
        @Inject('VehicleRepository') private vehicleRepository: VehicleRepository
    ){}

    public async handler(): Promise<VehicleResponse[]>{
        console.log('CaseUse - handler()');

        const service = new VehicleService(this.vehicleRepository)
        return await service.GetAll();
    }
}