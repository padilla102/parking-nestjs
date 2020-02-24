import VehicleResponse from "../dto/useCaseResponses/vehicleResponse";
import vehicleRequest from "../dto/useCaseRequests/vehicleRequest";


export interface VehicleRepository{
    getAll(): Promise<VehicleResponse[]>;

    getById(id:string): Promise<VehicleResponse>;

    create(vehicleRequest: vehicleRequest): Promise<VehicleResponse>;

    update(id:string, vehicleRequest: vehicleRequest): Promise<VehicleResponse>;

    delete(id:string): Promise<VehicleResponse>;
}