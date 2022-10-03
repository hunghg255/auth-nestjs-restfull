import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GalleriesService } from './galleries.service';
import { ApiResponseProperty } from '@nestjs/swagger';

class GalleriesRes {
  @ApiResponseProperty({ type: String })
  id: string;

  @ApiResponseProperty({ type: String })
  imageUrl: string;

  @ApiResponseProperty({ type: String })
  description: string;
}

@ApiTags('Galleries')
@Controller('galleries')
export class GalleriesController {
  constructor(private readonly galleriesService: GalleriesService) {}

  @ApiOperation({
    operationId: 'galleries',
    summary: 'Get galleries',
  })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: GalleriesRes,
  })
  getGalleries() {
    return this.galleriesService.getGalleries();
  }
}
