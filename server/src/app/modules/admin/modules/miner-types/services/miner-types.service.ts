import { Component, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MinerType } from "../../../../../entity/miner-type.entity";

@Component()
export class MinerTypesService {
  constructor(
    @InjectRepository(MinerType)
    public minerTypeRepository: Repository<MinerType>,
  ) {}

  async findAllTypes() {
    try {
      const miners = await this.minerTypeRepository.find();
      return Promise.resolve(miners);
    } catch (err) {
      return Promise.reject("Can't get shoppingRequests list");
    }
  }

  public async createMinerType(dto) {
    try {
      const { name, price, description, ram, gpu, cpu } = dto;
      const miner = Object.assign(new MinerType(), {
        name,
        price,
        description,
        ram,
        gpu,
        cpu,
      });
      return await this.minerTypeRepository.save(miner);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
