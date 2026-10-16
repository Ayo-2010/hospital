FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run db:generate && pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nuxt
COPY --from=builder /app/.output ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public
USER nuxt
EXPOSE 3000
ENV PORT 3000 HOST 0.0.0.0
CMD [ "node", "server/index.mjs" ]
