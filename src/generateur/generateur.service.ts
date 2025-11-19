import { Injectable } from '@nestjs/common';
import { MoteurService } from 'src/moteur/moteur.service';
import { GenerateurRepository } from 'src/mouteur/generateur-repository/generateur-repository';

@Injectable()
export class GenerateurService {
  constructor(
    private repo: GenerateurRepository,
    private moteurService: MoteurService, // dépendance moteur
  ) {}

  genererElectricite() {
    // vérifie si le moteur est démarré
    if (this.moteurService.statutMoteur().includes('Arrêté')) {
      return 'Impossible : moteur arrêté ❌';
    }
    return this.repo.generatePower();
  }
}
