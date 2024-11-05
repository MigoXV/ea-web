# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine AS base

ENV FORCE_COLOR=0

RUN corepack enable

WORKDIR /opt/docusaurus

FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--frozen-lockfile` to ensure reproducibility.
RUN pnpm install --registry=https://registry.npmmirror.com --frozen-lockfile

## Build the static site.
RUN pnpm build 

# Stage 3a: Serve with `docusaurus serve`.
FROM prod as serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the production server.
CMD ["pnpm", "serve", "--host", "0.0.0.0", "--no-open"]



# # 复制 package.json 和 pnpm-lock.yaml，安装依赖项
# COPY package.json pnpm-lock.yaml ./

# # 安装 pnpm 并安装依赖
# RUN npm install -g pnpm --registry=https://registry.npmmirror.com && \
#     pnpm config set registry https://registry.npmmirror.com && \
#     pnpm install --loglevel verbose --registry=https://registry.npmmirror.com && \
#     pnpm store prune

# # 复制所有源代码
# COPY . .

# # 构建 Docusaurus 项目
# RUN pnpm run build && pnpm prune --prod

# # 使用更精简的基础镜像来运行生产环境
# FROM node:18-alpine AS production

# # 设置工作目录
# WORKDIR /app

# # 复制构建成果和生产依赖
# COPY --from=base /app /app

# # 安装 pnpm 以支持 pnpx
# RUN npm install -g pnpm --registry=https://registry.npmmirror.com && \
#     pnpm config set registry https://registry.npmmirror.com && \
#     pnpm install -g docusaurus

# # 设置环境变量为生产模式
# ENV NODE_ENV production

# # 暴露应用的默认端口
# EXPOSE 4000

# # 启动 Docusaurus 应用
# CMD ["pnpx", "docusaurus", "serve", "build", "--port", "4000"]
