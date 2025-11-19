import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurController } from './generateur.controller';
import { GenerateurRepository } from 'src/mouteur/generateur-repository/generateur-repository';

@Module({
  providers: [GenerateurService,GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule {}
