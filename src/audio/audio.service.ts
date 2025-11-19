import { Injectable } from '@nestjs/common';
import { GenerateurService } from 'src/generateur/generateur.service';
import { AudioRepository } from 'src/mouteur/audio-repository/audio-repository';

@Injectable()
export class AudioService {
  constructor(
    private repo: AudioRepository,
    private generateur: GenerateurService,
  ) {}

  jouerMusique() {
    const power = this.generateur.genererElectricite();
    if (power.includes('Impossible'))
      return 'Audio impossible : pas de courant ❌';

    return this.repo.playMusic();
  }
}
