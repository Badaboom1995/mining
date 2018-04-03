import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';


@Entity('miner-types')
export class MinerType {
  /**
   * Db id
   */
  @ObjectIdColumn()
  public id: string;
  /**
   * Miner display name
   */
  @Column()
  public name : string;
  /**
   * Miner total price in usd
   */
  @Column()
  public price : number;
  /**
   * Miner description
   */
  @Column()
  public description : string;
  /**
   * Ram value in mb
   */
  @Column()
  public ram : number;
  /**
   * Gpu name
   */
  @Column()
  public gpu : string;
  /**
   * Cpu name
   */
  @Column()
  public cpu: string;
  /**
   * Miner hashRate
   */
  @Column()
  public hashRate: string;
  /**
   * Miner solsRate
   */
  @Column()
  public solsRate: string;
  /**
   * Power
   */
  @Column()
  public power: string;
}

