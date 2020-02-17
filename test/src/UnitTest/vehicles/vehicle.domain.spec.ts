import Vehicle from "../../../../src/domain/dtos/vehicle";

describe('VehicleDomain', () =>{
    const vehicle = new Vehicle('5e4307dc1070db3c3c909cbc','ABC123', 1600, "1", new Date(), new Date());

    describe('getId', () =>{
        it('return Id of Vehile', ()=>{
            const id = vehicle.getId();
            expect(id).toBe(vehicle.getId())
        });
    });

    describe('getPlaca', () =>{
        it('return placa of Vehile', ()=>{
            const placa = vehicle.getPlaca();
            expect(placa).toBe(vehicle.getPlaca())
        });

        it('return throw placa invalid', ()=>{
            expect(() => {
                new Vehicle('5e4307dc1070db3c3c909cbc','AAAAAA', 1600, "1", new Date(), new Date())
            }).toThrow();
        });
    });

    describe('getCylinder', () =>{
        it('return cylinder of Vehile', ()=>{
            const cylinder = vehicle.getCylinder();
            expect(cylinder).toBe(vehicle.getCylinder())
        });
    });

    describe('getVehicleTypeId', () =>{
        it('return vehicle type id of Vehile', ()=>{
            const vehicleTypeId = vehicle.getVehicleTypeId();
            expect(vehicleTypeId).toBe(vehicle.getVehicleTypeId())
        });
    });

    describe('getCreatedAt', () =>{
        it('return created date of Vehile', ()=>{
            const createdAt = vehicle.getCreatedAt();
            expect(createdAt).toBe(vehicle.getCreatedAt())
        });
    });

    describe('getUpdatedAt', () =>{
        it('return updated date of Vehile', ()=>{
            const updatedAt = vehicle.getUpdatedAt();
            expect(updatedAt).toBe(vehicle.getUpdatedAt())
        });
    });

});