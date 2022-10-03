import { Injectable } from '@nestjs/common';
import { galleries } from '../mock-data/galleries';

@Injectable()
export class GalleriesService {
  getGalleries() {
    return galleries;
  }
}
