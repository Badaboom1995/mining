/*
import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { User, UserBalance, UserEarnings } from "../entity/user.entity";


@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

  /!**
   * Insert balance and earnings rows into tables after user has been added
   * @param {InsertEvent<User>} event
   *!/
  public async afterInsert(event : InsertEvent<User>) {
      const { entity: user, manager } = event;
      console.log('USER AFTER INSERT');
      try {
        const balanceRepository = await manager.getRepository(UserBalance);
        const earningsRepository = await manager.getRepository(UserEarnings);
        await balanceRepository.save(new UserBalance(user.id));
        await earningsRepository.save(new UserEarnings(user.id));
      } catch (error) {

      }
  }


}
*/
