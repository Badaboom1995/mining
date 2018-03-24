import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from "typeorm";


@Entity('miner-users')
export class MinerUser {
  /**
   * Db id
   */
  @ObjectIdColumn()
  public id : string;
  /**
   * Miner id
   */
  @Column()
  public miner : string;
  /**
   * Percent from miner earnings
   */
  @Column()
  public percent : number;
  /**
   * Payed amount usd
   */
  @Column()
  public payed : number;
  /**
   * User entity for relation
   */
  @Column()
  public userId : string;
}

