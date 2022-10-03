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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const refreshToken_1 = require("./dto/refreshToken");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(body) {
        return this.authService.login(body === null || body === void 0 ? void 0 : body.username);
    }
    refreshToken(body) {
        return this.authService.refreshToken(body === null || body === void 0 ? void 0 : body.refreshToken);
    }
    logout(request) {
        return this.authService.logout(request.username);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'login',
        summary: 'Login',
        description: 'Account: admin, admin1, admin2, adminRefresh, adminRefresh1, adminRefresh2',
    }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDtoReq }),
    (0, swagger_1.ApiResponse)({
        type: login_dto_1.LoginDtoRes,
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'Refresh token',
        summary: 'Refresh token',
    }),
    (0, swagger_1.ApiBody)({ type: refreshToken_1.refreshTokenDtoReq }),
    (0, swagger_1.ApiResponse)({
        type: refreshToken_1.refreshTokenDtoRes,
    }),
    (0, common_1.Post)('refresh-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'logout',
        summary: 'Logout',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map