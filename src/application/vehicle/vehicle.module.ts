import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import GetAllUseCase from './getAll.usecase';
import GetByIdUseCase from './getById.usecase';
import CreateUseCase from './create.usecase';
import UpdateUseCase from './update.usecase';
import DeleteUseCase from './delete.usecase';
import { DomainModule } from 'src/domain/domain.module';
import VehicleSchema from 'src/infrastructure/adapters/repository/schemas/vehicle.shema';
import VehicleRepositoryMongo from 'src/infrastructure/adapters/repository/vehicle.repository.mongo';


@Module({
    imports:[
        DomainModule,
        MongooseModule.forFeature([
            {name:'Vehicle', schema:VehicleSchema}
        ])
    ],
    providers:[
        GetAllUseCase,
        GetByIdUseCase,
        CreateUseCase,
        UpdateUseCase,
        DeleteUseCase,
        {
            provide: 'VehicleRepository',
            useClass: VehicleRepositoryMongo,
        },
    ],
    exports:[
        GetAllUseCase,
        GetByIdUseCase,
        CreateUseCase,
        UpdateUseCase,
        DeleteUseCase
    ]
})
export default class VehicleModule {}
