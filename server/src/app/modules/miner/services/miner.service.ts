import { Component } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import { Miner } from "../../../entity/miner.entity";
import {Repository} from 'typeorm';
import { MinerUser } from "../../../entity/miner-user.entity";
import { User } from "../../../entity/user.entity";
@Component()
export class MinerService {
    public constructor(
      @InjectRepository(Miner) private minerRepository : Repository<Miner>,
      @InjectRepository(MinerUser) private minerUserRepository : Repository<MinerUser>
    ) { }
    /**
     * Creates new miner entry with passed minerType
     * @param minerTypeId {any}
     * @param user {User}
     * @param initialSum {number} - Initial sum of miner fundrising
     */
    public async createMiner(minerTypeId : any, user : User, initialSum : number) : Promise<Miner> {
      const miner = Object.assign(new Miner(),{
        status: 'fundraising',
        payedAmount: initialSum,
        type: minerTypeId,
        users: [
          Object.assign(new MinerUser(), {
            userId: user.id,
            amount: initialSum
          })
        ]
      });
      const entry = await this.minerRepository.save(miner);
      return entry;
    }


  /**
   * Add payment to existing miner
   * @param id
   * @param {number} amount
   * @param {User} user
   * @returns {Promise<Miner>}
   */
    public async addPaymentToMiner(id : any, amount : number, user : User) : Promise<Miner> {
      const miner = await this.minerRepository.findOne({
        where: { id },
        relations: ['users']
      });
      const isUserAlreadyInList  : boolean = miner.users.some(one => one.userId == user.id);
      if (!isUserAlreadyInList) {
        miner.users.push(Object.assign(new MinerUser(),{
            userId: user.id,
            amount
        }));
      }
      miner.payedAmount += amount;
      const entry = await this.minerRepository.save(miner);
      return entry;
    }


    /**
     *
     * @returns {Promise<void>}
    */
    public async getFundraisingStatusMiners() : Promise<Miner[]> {
        return await this.minerRepository.find({
          where: {
            status: 'fundraising'
          },
          relations: ['users', 'type']
        });
    }



}
