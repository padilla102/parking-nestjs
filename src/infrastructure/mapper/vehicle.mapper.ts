import VehicleResponse from "src/domain/dto/useCaseResponses/vehicleResponse";
import { VehicleEntity } from "../adapters/repository/entities/vehicle.entity";

export default class VehicleMapper{
    public static toDomain(vehicleEntity: VehicleEntity): VehicleResponse{
        return new VehicleResponse(
            vehicleEntity._id,
            vehicleEntity.placa,
            vehicleEntity.cylinder,
            vehicleEntity.vehicleTypeId,
            vehicleEntity.createdAt,
            vehicleEntity.updatedAt
        )
    }

    public static toDomains(vehiclesEntity: VehicleEntity[]): VehicleResponse[] {
        const vehicles = new Array<VehicleResponse>();
        vehiclesEntity.forEach(vehicleEntity => {
            const vehicle = this.toDomain(vehicleEntity);
            vehicles.push(vehicle);
        });

        return vehicles;
    }
}