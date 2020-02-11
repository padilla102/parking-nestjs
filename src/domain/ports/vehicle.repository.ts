import Vehicle from "../vehicle";


export interface VehicleRepository{
    getAll(): Promise<Vehicle[]>;

    getById(id:string): Promise<Vehicle>;

    create(vehicle: Vehicle): Promise<Vehicle>;

    update(id:string, vehicle: Vehicle): Promise<Vehicle>;

    delete(id:string): Promise<Vehicle>;
}