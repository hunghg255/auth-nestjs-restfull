"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_1 = require("../mock-data/users");
const jwt = __importStar(require("jsonwebtoken"));
let AuthService = class AuthService {
    constructor() {
        this.account = users_1.account;
    }
    login(username) {
        const user = this.account.find((user) => user.username === username);
        if (!user)
            return {
                code: 401,
            };
        const tokens = this.generateTokens(user);
        this.updateRefreshToken(username, tokens.refreshToken);
        return tokens;
    }
    refreshToken(refreshToken) {
        if (!refreshToken)
            return {
                code: 401,
            };
        const user = this.account.find((user) => user.refreshToken === refreshToken);
        if (!user)
            return {
                code: 403,
            };
        try {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const tokens = this.generateTokens(user);
            this.updateRefreshToken(user.username, tokens.refreshToken);
            return tokens;
        }
        catch (error) {
            return {
                code: 403,
            };
        }
    }
    logout(username) {
        const user = this.account.find((user) => user.username === username);
        this.updateRefreshToken(user.username, null);
        console.log(this.account);
        return {
            code: 204,
        };
    }
    generateTokens(data) {
        const { id, username } = data;
        const accessToken = jwt.sign({ id, username }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: (username === null || username === void 0 ? void 0 : username.includes('Refresh')) ? '1m' : '1d',
        });
        const refreshToken = jwt.sign({ id, username }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '30d',
        });
        return { accessToken, refreshToken };
    }
    updateRefreshToken(username, refreshToken) {
        this.account = this.account.map((user) => {
            if (user.username === username)
                return Object.assign(Object.assign({}, user), { refreshToken });
            return user;
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map