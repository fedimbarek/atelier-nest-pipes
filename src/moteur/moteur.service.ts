import { Injectable } from '@nestjs/common';
import { MoteurRepository } from 'src/mouteur/moteur-repository/moteur-repository';

@Injectable()
export class MoteurService {
    constructor(private repo: MoteurRepository) {}

  demarrerMoteur() {
    return this.repo.start();
  }

  statutMoteur() {
    return this.repo.getStatus();
  }
}
