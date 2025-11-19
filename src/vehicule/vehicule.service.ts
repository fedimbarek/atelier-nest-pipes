import { Injectable } from '@nestjs/common';
import { MoteurService } from 'src/moteur/moteur.service';
import { GenerateurService } from 'src/generateur/generateur.service';
import { PhareService } from 'src/phare/phare.service';
import { AudioService } from 'src/audio/audio.service';
import { VehiculeRepository } from 'src/mouteur/vehicule-repository/vehicule-repository';

@Injectable()
export class VehiculeService {
  constructor(
    private moteur: MoteurService,
    private generateur: GenerateurService,
    private phare: PhareService,
    private audio: AudioService,
    private repo: VehiculeRepository,
  ) {}

  operate() {
    this.moteur.demarrerMoteur();
    this.generateur.genererElectricite();
    this.phare.allumerPhare();
    this.audio.jouerMusique();

    return this.repo.operate();
  }
}
