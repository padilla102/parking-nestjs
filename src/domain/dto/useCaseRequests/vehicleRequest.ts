export default class VehicleRequest {
    private placa: string;
    private cylinder: number;
    private vehicleTypeId: string;

    constructor(
        placa: string,
        cylinder: number,
        vehicleTypeId: string
    ){
        this.setPlaca(placa),
        this.setCylinder(cylinder),
        this.setVehicleTypeId(vehicleTypeId)
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

}