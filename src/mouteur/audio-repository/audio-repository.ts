import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioRepository {
  playMusic() {
    return '🎵 Musique en cours...';
  }
}
