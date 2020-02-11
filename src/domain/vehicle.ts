export default class Vehicle {
    private id: string;
    private readonly placa: string;
    private readonly cylinder: number;
    private readonly vehicleTypeId: string;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;

    constructor(
        id: string,
        placa: string,
        cylinder: number,
        vehicleTypeId: string,
        createdAt: Date,
        updatedAt: Date
    ){
        this.id = id,
        this.placa = placa,
        this.cylinder = cylinder,
        this.vehicleTypeId = vehicleTypeId,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt
    }

    public getId(): string{
        return this.placa;
    }

    public getPlaca(): string{
        return this.placa;
    }

    public getCylinder(): number{
        return this.cylinder;
    }

    public getVehicleTypeId(): string{
        return this.vehicleTypeId;
    }

    public getCreatedAt(): Date{
        return this.createdAt;
    }

    public getUpdatedAt(): Date{
        return this.updatedAt;
    }

}