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
exports.getPostsDtoRes = exports.Post = exports.getPostsDtoReq = void 0;
const swagger_1 = require("@nestjs/swagger");
class getPostsDtoReq {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: '1' }),
    __metadata("design:type", String)
], getPostsDtoReq.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'title' }),
    __metadata("design:type", String)
], getPostsDtoReq.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Html' }),
    __metadata("design:type", String)
], getPostsDtoReq.prototype, "tags", void 0);
exports.getPostsDtoReq = getPostsDtoReq;
class Post {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: String }),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Array }),
    __metadata("design:type", String)
], Post.prototype, "tags", void 0);
exports.Post = Post;
class getPostsDtoRes {
}
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Post }),
    __metadata("design:type", Post)
], getPostsDtoRes.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Number }),
    __metadata("design:type", Number)
], getPostsDtoRes.prototype, "current_page", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Number }),
    __metadata("design:type", Number)
], getPostsDtoRes.prototype, "total_page", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Number }),
    __metadata("design:type", Number)
], getPostsDtoRes.prototype, "page_size", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({ type: Number }),
    __metadata("design:type", Number)
], getPostsDtoRes.prototype, "total", void 0);
exports.getPostsDtoRes = getPostsDtoRes;
//# sourceMappingURL=getPost.dto.js.map