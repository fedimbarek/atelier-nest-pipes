import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
import { MoteurController } from './moteur.controller';
import { MoteurRepository } from 'src/mouteur/moteur-repository/moteur-repository';

@Module({
  providers: [MoteurService,MoteurRepository],
  controllers: [MoteurController]
})
export class MoteurModule {}
