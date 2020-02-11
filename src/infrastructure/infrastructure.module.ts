import { Module } from '@nestjs/common';
import ApplicationModule from '../application/application.module';
import { MongooseModule } from '@nestjs/mongoose';
import VehicleSchema from './adapters/repository/schemas/vehicle.shema';
import VehicleController from './controllers/vehicle.controller';

@Module({
    imports:[
        ApplicationModule,
        MongooseModule.forRoot('mongodb://localhost:27017/parkin-nestjs',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false
        }),
        MongooseModule.forFeature([{ name: 'Vehicle', schema:VehicleSchema}])
    ],
    controllers:[VehicleController]
})
export default class InfrastructureModule {}
