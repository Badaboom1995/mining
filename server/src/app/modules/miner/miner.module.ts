import { Module, NestModule, MiddlewaresConsumer,  } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import { Miner } from "../../entity/miner.entity";
import { MinerUser } from "../../entity/miner-user.entity";




@Module({
  imports: [
    TypeOrmModule.forFeature([Miner, MinerUser])
  ]
})
export class MinerModule implements NestModule {

    public configure(consumer: MiddlewaresConsumer): void | MiddlewaresConsumer {

    }
}
