"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return `<h1>Welcome to Agiletech Test</h1>
    <a href="https://agiletechvn.vercel.app/api" target="_blank">Link Swagger</a>
    <code style="font-size:16px">
      <h4>POST: /auth/login: Đăng nhập có accessToken, refreshToken (accessToken hết hạn sau 1 phút, refreshToken hết hạn sau 1 ngày)</h4>
      <h4>POST: /auth/refreshToken: Refresh token khi accessToken hết hạn</h4>
      <h4>POST: /auth/logout: Xoá access token</h4>
      <br />
      <h4>GET: /posts: Lấy danh sách posts</h4>
      <h4>GET: /posts?title=&page=: Lấy danh sách posts theo title hoặc phân trang</h4>
      <h4>POST: /posts: Tạo một posts</h4>
      <h4>PATCH: /posts/{postId}: Sửa thông tin post</h4>
      <h4>DELETE: /posts/{postId}: Xoá post</h4>
      <h4>GET: /posts/tags: Lấy danh sách tags của post</h4>
      <br />
      <h4>GET: /galleries: Lấy ảnh từ galleries</h4>
    </code>

    <h1>Yêu cầu</h1>
    `;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map