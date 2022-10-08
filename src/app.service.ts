import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Welcome to Agiletech Test</h1>
    <a href="http://38.242.142.81:5001/api" target="_blank">Link Swagger</a>
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
}
