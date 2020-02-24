import { 
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete
} from '@nestjs/common';
import GetAllUseCase from 'src/application/vehicle/getAll.usecase';
import GetByIdUseCase from 'src/application/vehicle/getById.usecase';
import CreateUseCase from 'src/application/vehicle/create.usecase';
import UpdateUseCase from 'src/application/vehicle/update.usecase';
import DeleteUseCase from 'src/application/vehicle/delete.usecase';
import VehicleRequest from 'src/domain/dto/useCaseRequests/vehicleRequest';
import VehicleResponse from 'src/domain/dto/useCaseResponses/vehicleResponse'

@Controller('vehicle')
export default class VehicleController {
    constructor(
        private getAllUseCase: GetAllUseCase,
        private readonly getByIdUseCase: GetByIdUseCase,
        private readonly createUseCase: CreateUseCase,
        private readonly updateUseCase: UpdateUseCase,
        private readonly deleteUserCase: DeleteUseCase
    ){}

    @Get()
    public async getAll(): Promise<VehicleResponse[]> {
        console.log('Controller - getAll()');
        const vehicles = await this.getAllUseCase.handler();
        return vehicles;
    }

    @Get(':id')
    public async getByID(@Param('id') id: string): Promise<VehicleResponse>{
        const vehicle = await this.getByIdUseCase.handler(id);
        return vehicle;
    }

    @Post()
    public async create(@Body() vehicleReq:VehicleRequest): Promise<VehicleResponse>{
        console.log(vehicleReq);
        const { placa, cylinder, vehicleTypeId } = vehicleReq;
        const vehicleCreated = await this.createUseCase.handler(new VehicleRequest(placa, cylinder, vehicleTypeId));
        return vehicleCreated;
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() vehicleReq:VehicleRequest): Promise<VehicleResponse>{
        const vehicleUpdated = await this.updateUseCase.handler(id, new VehicleRequest(vehicleReq.getPlaca(), vehicleReq.getCylinder(), vehicleReq.getVehicleTypeId()));
        return vehicleUpdated;
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<VehicleResponse>{
        const vehicleDeleted = await this.deleteUserCase.handler(id);
        return vehicleDeleted;
    }

}
