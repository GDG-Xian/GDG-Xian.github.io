GDG-Xian.github.io
==================

GDG 西安社区官网，使用 Jekyll 构建的静态站点。

## 主题

- 极简 light 主题，纯 CSS 实现：`css/application.css`
- 无 CSS 预处理器（已移除 `_sass` / SCSS），无前端 CSS 框架，无 jQuery / Materialize 脚本
- 页面结构：`_layouts/`（default / page / post），可复用片段：`_includes/`
- 移动端导航使用纯 CSS（checkbox + label），不依赖 JavaScript

## 本地开发

```bash
bundle install
bundle exec jekyll serve
```

然后访问 http://localhost:4000

## 结构说明

- `_posts/` 文章（URL 规则 `/:title`，见 `_config.yml`）
- `_data/` 作者与活动场地数据
- `assets/`、`images/` 图片资源
- `archive.html` 归档页，`index.html` 首页（分页由 `jekyll-paginate` 提供）
