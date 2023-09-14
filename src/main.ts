import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.enableCors({
        origin: true, // Разрешенный домен (или список разрешенных доменов)
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные HTTP-методы
        credentials: true, // Разрешить передачу куки и заголовков аутентификации (если необходимо)
    });
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle('Drakosha world')
        .setDescription('The drakosha API description')
        .setVersion('1.0')
        .addTag('This is Drakosha world!')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3001);

}
bootstrap();