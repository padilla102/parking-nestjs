import Vehicle from "src/domain/vehicle";
import { VehicleEntity } from "../adapters/repository/entities/vehicle.entity";

export default class VehicleMapper{
    public static toDomain(vehicleEntity: VehicleEntity): Vehicle{
        return new Vehicle(
            vehicleEntity._id,
            vehicleEntity.placa,
            vehicleEntity.cylinder,
            vehicleEntity.vehicleTypeId,
            vehicleEntity.createdAt,
            vehicleEntity.updatedAt
        )
    }

    public static toDomains(vehiclesEntity: VehicleEntity[]): Vehicle[] {
        const vehicles = new Array<Vehicle>();
        vehiclesEntity.forEach(vehicleEntity => {
            const vehicle = this.toDomain(vehicleEntity);
            vehicles.push(vehicle);
        });

        return vehicles;
    }
}