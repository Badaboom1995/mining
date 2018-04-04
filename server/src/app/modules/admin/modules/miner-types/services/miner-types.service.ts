import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MinerType } from '../../../../../entity/miner-type.entity';

@Component()
export class MinerTypesService {
  constructor(
    @InjectRepository(MinerType)
    public minerTypeRepository: Repository<MinerType>,
  ) {}
  async findById(id) {
    try {
      const miner = await this.minerTypeRepository.findOneById(id);
      return Promise.resolve(miner);
    } catch (err) {
      return Promise.reject("Can't get miner info");
    }
  }

  async findAll() {
    try {
      const miners = await this.minerTypeRepository.find();
      return Promise.resolve(miners);
    } catch (err) {
      return Promise.reject("Can't get miner-types list");
    }
  }

  public async create(dto) {
    try {
      const {
        name,
        price,
        description,
        ram,
        gpu,
        cpu,
        hashRate,
        solsRate,
        power,
      } = dto;
      const miner = Object.assign(new MinerType(), {
        name,
        price,
        description,
        ram,
        gpu,
        cpu,
        hashRate,
        solsRate,
        power,
      });
      return await this.minerTypeRepository.save(miner);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
