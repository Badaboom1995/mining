import {
  Module,
} from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MinerType } from "../../../../entity/miner-type.entity";
import { MinerTypesController } from './controllers';
import { MinerTypesService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([MinerType])
  ],
  controllers: [MinerTypesController],
  components: [MinerTypesService],
})

export class MinerTypesModule {}
