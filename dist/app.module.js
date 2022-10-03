"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_middleware_1 = require("./auth.middleware");
const auth_module_1 = require("./auth/auth.module");
const galleries_module_1 = require("./galleries/galleries.module");
const posts_controller_1 = require("./posts/posts.controller");
const posts_service_1 = require("./posts/posts.service");
const posts_module_1 = require("./posts/posts.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: '/auth/logout',
            method: common_1.RequestMethod.DELETE,
        }, {
            path: '/tags',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/posts',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/posts',
            method: common_1.RequestMethod.POST,
        }, '/posts/*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), auth_module_1.AuthModule, galleries_module_1.GalleriesModule, posts_module_1.PostsModule],
        controllers: [app_controller_1.AppController, posts_controller_1.PostsController],
        providers: [app_service_1.AppService, posts_service_1.PostsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map