import VehicleRequest from "../dto/useCaseRequests/vehicleRequest";
import VehicleResponse from "../dto/useCaseResponses/vehicleResponse";
import { VehicleRepository } from "../../domain/ports/vehicle.repository";


export default class VehicleService {
    constructor(
        private vehicleRepository: VehicleRepository
    ){}
    
    public async Create(vehicleReq:VehicleRequest): Promise<VehicleResponse>{
        return await this.vehicleRepository.create(vehicleReq);
    }

    public async GetById(id:string): Promise<VehicleResponse>{
        return await this.vehicleRepository.getById(id);
    }

    public async GetAll(): Promise<VehicleResponse[]>{
        return await this.vehicleRepository.getAll();
    }

    public async Update(id:string, vehicleReq:VehicleRequest): Promise<VehicleResponse>{
        return await this.vehicleRepository.update(id,vehicleReq);
    }

    public async Delete(id:string): Promise<VehicleResponse>{
        return await this.vehicleRepository.delete(id);
    }


    private ValidPlaca(placa:string):boolean{
        const pattern = "[A-Za-z]{1,3}[0-9]{3}|^[A-Za-z]{3}[0-9]{2}[A-Za-z]{1}|^[0-9]{6}|^[A-Za-z]{2}[0-9]{4}";
        if (!placa.match(pattern)){
            return false
        }
        return true;
    }
}