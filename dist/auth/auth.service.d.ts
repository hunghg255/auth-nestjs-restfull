export declare class AuthService {
    account: {
        id: number;
        username: string;
        refreshToken: any;
    }[];
    login(username: string): {
        accessToken: string;
        refreshToken: string;
    } | {
        code: number;
    };
    refreshToken(refreshToken: string): {
        accessToken: string;
        refreshToken: string;
    } | {
        code: number;
    };
    logout(username: any): {
        code: number;
    };
    generateTokens(data: any): {
        accessToken: string;
        refreshToken: string;
    };
    updateRefreshToken(username: any, refreshToken: any): void;
}
