import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity('api-log')
export class ApiLog {

  @ObjectIdColumn()
  public id : string;

  @Column({
    enum: ['error', 'statistic'],
    default: 'error'
  })
  public type : string;

  @Column()
  public content : string;

  @Column()
  public name : string;

  @Column()
  public description : string;

}
