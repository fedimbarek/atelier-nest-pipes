import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
  constructor(private service: GenerateurService) {}

  @Get('generate')
  generate() {
    return this.service.genererElectricite();
  }
}
