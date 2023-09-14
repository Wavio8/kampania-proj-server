import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {KampaniaModule} from "./kampania/kampania.module";
import {CoreKampModule} from "./coreKamp/coreKamp.module";

@Module({
  imports: [KampaniaModule,CoreKampModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
