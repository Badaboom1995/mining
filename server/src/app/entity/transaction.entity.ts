import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';



@Entity('transactions')
export class Transaction {
  @ObjectIdColumn()
  public id: string;

  @Column({
    enum: ['mining', 'pool'],
  })
  public investmentType: string;

  @Column({
    enum: ['investment', 'withdraw', 'miner-reward', 'bonus'],
  })
  public transactionType: string;

  @Column({
    enum: ['USD', 'UAH', 'ZCASH', 'ETH'],
  })
  public currency: string;

  @Column()
  public amount: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column()
  public userId : string;
}
