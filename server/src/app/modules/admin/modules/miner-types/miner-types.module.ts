import {
  Module,
} from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MinerTypesController } from './controllers';
import { MinerTypesService } from './services';
import { MinerType } from "../../../../entity/miner-type.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([MinerType])
  ],
  controllers: [MinerTypesController],
  components: [MinerTypesService],
})

export class MinerTypesModule {}
