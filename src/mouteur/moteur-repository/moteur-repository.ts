import { Injectable } from '@nestjs/common';

@Injectable()
export class MoteurRepository {
  private status = 'Arrêté';

  start() {
    this.status = 'Démarré';
    return 'Moteur démarré !';
  }

  getStatus() {
    return `Statut du moteur : ${this.status}`;
  }
}
