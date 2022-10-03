import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: any): {
        accessToken: string;
        refreshToken: string;
    } | {
        code: number;
    };
    refreshToken(body: any): {
        accessToken: string;
        refreshToken: string;
    } | {
        code: number;
    };
    logout(request: any): {
        code: number;
    };
}
