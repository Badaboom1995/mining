import { Column,CreateDateColumn, Entity, ManyToOne, JoinColumn, ObjectIdColumn, OneToMany, OneToOne } from "typeorm";
import { MinerType } from "./miner-type.entity";
import { MinerUser } from "./miner-user.entity";
import { BuyOrder } from './buy-order.entity';


@Entity('miners')
export class Miner {
  /**
   * Miner possible currency types
   * @type {string[]}
   */
  public static currencyTypes = ['zcash', 'eth'];
  /**
   * Miner possible status list
   * @type {string[]}
   */
  public static statusTypes = ['online', 'stop', 'fundraising'];
  /**
   * Db id
   */
  @ObjectIdColumn()
  public id : string;
  /**
   * Miner hash address for balance check with transactions
   */
  @Column()
  public address : string;
  /**
   * Currency mining by miner ( used to define which api use to check transactions )
   */
  @Column({
    enum: Miner.currencyTypes
  })
  public currency : string;
  /**
   * Miner type
   */
  @OneToOne(type => MinerType, minerType => minerType.id)
  @JoinColumn()
  public type : MinerType;
  /**
   * Last checked transactions id
   */
  @Column()
  public lastTransactionId : string;
  /**
   * Entity creation date
   */
  @CreateDateColumn()
  public createdAt : Date;
  /**
   * Miner current status to determine is miner rising money for start or online and mine currency
   */
  @Column({
    enum: Miner.statusTypes
  })
  public status : string;
  /**
   * Amount of rised money for miner buy
   */
  @Column()
  public payedAmount : number;
  /**
   * Users list payed for this miner
   * @type {any[]}
   */
  @OneToMany(type => MinerUser, user => user.id)
  @JoinColumn()
  public users : MinerUser[];
  /**
   * Miner buy order if it was fully buyed
   */
  @OneToOne(type => BuyOrder)
  @JoinColumn()
  public order? : BuyOrder;
}

