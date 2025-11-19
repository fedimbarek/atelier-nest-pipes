import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { VehiculeRepository } from 'src/mouteur/vehicule-repository/vehicule-repository';

@Module({
  providers: [VehiculeService,VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
