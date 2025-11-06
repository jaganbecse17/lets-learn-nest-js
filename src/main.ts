import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

// const contextId = {}; // optional, for scoped providers
//   const modules = (app as any).container.getModules();

//   console.log('🔍 IoC Provider Graph:');
//   for (const [key, module] of modules) {
//     console.log(`\n📦 Module: ${key}`);
//     const providers = module.providers;
//     // for (const [provKey, provValue] of providers) {
//     //   console.log(`  - ${provKey}`);
//     // } 
//   }

}
bootstrap();
