import { Injectable } from '@nestjs/common';

@Injectable()
export class PhareRepository {
  turnOn() {
    return 'Phare allumé 🔦';
  }
}
