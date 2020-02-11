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
import Vehicle from 'src/domain/vehicle';

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
    public async getAll(): Promise<any> {
        const vehicles = await this.getAllUseCase.handler();
        return vehicles;
    }

    @Get(':id')
    public async getByID(@Param('id') id: string): Promise<any>{
        const vehicle = await this.getByIdUseCase.handler(id);
        return vehicle;
    }

    @Post()
    public async create(@Body() vehicle:Vehicle): Promise<any>{
        const vehicleCreated = await this.createUseCase.handler(vehicle);
        return vehicleCreated;
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() vehicle:Vehicle): Promise<any>{
        const vehicleUpdated = await this.updateUseCase.handler(id, vehicle);
        return vehicleUpdated;
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<any>{
        const vehicleDeleted = await this.deleteUserCase.handler(id);
        return vehicleDeleted;
    }

}
