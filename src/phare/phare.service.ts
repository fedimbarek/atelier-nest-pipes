import { Injectable } from '@nestjs/common';
import { GenerateurService } from 'src/generateur/generateur.service';
import { PhareRepository } from 'src/mouteur/phare-repository/phare-repository';

@Injectable()
export class PhareService {
  constructor(
    private repo: PhareRepository,
    private generateur: GenerateurService,
  ) {}

  allumerPhare() {
    const power = this.generateur.genererElectricite();
    if (power.includes('Impossible'))
      return 'Le phare ne peut pas fonctionner : pas de courant ❌';

    return this.repo.turnOn();
  }
}
