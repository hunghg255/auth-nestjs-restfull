import { GalleriesService } from './galleries.service';
export declare class GalleriesController {
    private readonly galleriesService;
    constructor(galleriesService: GalleriesService);
    getGalleries(): {
        id: string;
        desctiption: string;
        imageUrl: string;
    }[];
}
