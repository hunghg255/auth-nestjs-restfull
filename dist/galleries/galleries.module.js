"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleriesModule = void 0;
const common_1 = require("@nestjs/common");
const galleries_controller_1 = require("./galleries.controller");
const galleries_service_1 = require("./galleries.service");
let GalleriesModule = class GalleriesModule {
};
GalleriesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [galleries_controller_1.GalleriesController],
        providers: [galleries_service_1.GalleriesService],
    })
], GalleriesModule);
exports.GalleriesModule = GalleriesModule;
//# sourceMappingURL=galleries.module.js.map