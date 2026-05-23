import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const user = configService.get<string>('MONGO_USER');
        const password = configService.get<string>('MONGO_PASSWORD');
        const dbName = configService.get<string>('MONGO_DB_NAME');
        const host = 'mongodb';  // nome do serviço no docker-compose
        const port = configService.get<string>('MONGO_CONTAINER_PORT') || '27017';
        const uri = `mongodb://${user}:${password}@${host}:${port}/${dbName}?authSource=admin`;
        console.log('Conectando ao MongoDB local:', uri.replace(/:.+@/, ':****@')); // oculta senha
        return { uri };
      },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}