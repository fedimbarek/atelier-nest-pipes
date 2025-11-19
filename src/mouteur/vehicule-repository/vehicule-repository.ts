import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculeRepository {
  operate() {
    return 'Le véhicule fonctionne correctement 🚗';
  }
}
