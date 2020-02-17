import { VehicleRepository } from '../../../../src/domain/ports/vehicle.repository'
import Vehicle from '../../../../src/domain/vehicle';

export default class VehicleRepositoryMongoMock implements VehicleRepository {
    async getAll():Promise<Vehicle[]>{
        const vehicles = new Array<Vehicle>();
        vehicles.push(new Vehicle("5e4307dc1070db3c3c909cbc","GIF46F",250,"2",new Date(), new Date()))
        return vehicles;
    }

    async getById():Promise<Vehicle>{
        return new Vehicle("5e4307dc1070db3c3c909cbc","GIF46F",250,"2",new Date(), new Date())
    }
    
    async create(vehicle: Vehicle): Promise<Vehicle>{
        return vehicle;
    }

    async update(id:string, vehicle: Vehicle): Promise<Vehicle>{
        return vehicle;
    }

    async delete(id:string): Promise<Vehicle>{
        return new Vehicle('5e4307dc1070db3c3c909cbc','ABC123', 1600, "1", new Date(), new Date())
    }  
}