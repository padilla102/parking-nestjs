import { Module } from '@nestjs/common';
import VehicleModule from './vehicle/vehicle.module';
import { MongooseModule } from '@nestjs/mongoose';
import VehicleSchema from 'src/infrastructure/adapters/repository/schemas/vehicle.shema';

@Module({
  imports: [
    VehicleModule,
    MongooseModule.forFeature([{ name: 'Product', schema: VehicleSchema }])
  ],
  exports:[VehicleModule]
})
export default class ApplicationModule {}
