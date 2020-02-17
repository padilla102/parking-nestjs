export default class Vehicle {
    private id: string;
    private placa: string;
    private cylinder: number;
    private vehicleTypeId: string;
    private createdAt: Date;
    private updatedAt: Date;

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
        return this.id;
    }
    public setId(id:string){
        this.id = id;
    }

    public getPlaca(): string{
        return this.placa;
    }
    public setPlaca(placa:string){
        this.placa = placa;
    }

    public getCylinder(): number{
        return this.cylinder;
    }
    public setCylinder(cylinder:number){
        this.cylinder = cylinder;
    }

    public getVehicleTypeId(): string{
        return this.vehicleTypeId;
    }
    public setVehicleTypeId(vehicleTypeId:string){
        this.vehicleTypeId = vehicleTypeId;
    }

    public getCreatedAt(): Date{
        return this.createdAt;
    }
    public setCreatedAt(createdAt): Date{
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date{
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt:Date){
        this.updatedAt = updatedAt;
    }

}