import Vehicle from "../dtos/vehicle";

export default class VehicleService {

    public valid(vehicle: Vehicle):Vehicle{

        if(!this.ValidPlaca(vehicle.getPlaca())){
            throw 'Placa Invalida ' + vehicle.getPlaca();
        }

        return vehicle;
    }


    private ValidPlaca(placa:string):boolean{
        const pattern = "[A-Za-z]{1,3}[0-9]{3}|^[A-Za-z]{3}[0-9]{2}[A-Za-z]{1}|^[0-9]{6}|^[A-Za-z]{2}[0-9]{4}";
        if (!placa.match(pattern)){
            return false
        }
        return true;
    }
}