import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareController } from './phare.controller';
import { PhareRepository } from 'src/mouteur/phare-repository/phare-repository';

@Module({
  providers: [PhareService,PhareRepository],
  controllers: [PhareController]
})
export class PhareModule {}
