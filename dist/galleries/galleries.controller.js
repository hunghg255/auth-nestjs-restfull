"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const galleries_service_1 = require("./galleries.service");
const swagger_2 = require("@nestjs/swagger");
class GalleriesRes {
}
__decorate([
    (0, swagger_2.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], GalleriesRes.prototype, "id", void 0);
__decorate([
    (0, swagger_2.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], GalleriesRes.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_2.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], GalleriesRes.prototype, "description", void 0);
let GalleriesController = class GalleriesController {
    constructor(galleriesService) {
        this.galleriesService = galleriesService;
    }
    getGalleries() {
        return this.galleriesService.getGalleries();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'galleries',
        summary: 'Get galleries',
    }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The found record',
        type: GalleriesRes,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GalleriesController.prototype, "getGalleries", null);
GalleriesController = __decorate([
    (0, swagger_1.ApiTags)('Galleries'),
    (0, common_1.Controller)('galleries'),
    __metadata("design:paramtypes", [galleries_service_1.GalleriesService])
], GalleriesController);
exports.GalleriesController = GalleriesController;
//# sourceMappingURL=galleries.controller.js.map