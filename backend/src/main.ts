import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    const { address, port } = app.getHttpServer().address();
    console.log(`Server is running at http://${address}:${port}`);
  });
}

bootstrap();
