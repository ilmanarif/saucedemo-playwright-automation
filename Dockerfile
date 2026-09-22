# Ubah dari v1.45.0 menjadi v1.63.0
FROM mcr.microsoft.com/playwright:v1.63.0-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npx", "playwright", "test"]